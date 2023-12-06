import { PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';
import Measurement, { ActionProps, MeasurementSimulationUpdateInfo, ValueEqualityActionProps, ValueRangeActionProps, valueType } from '../interfaces/Measurement';
import { mqttPublicate } from '../providers/MQTTPublicationProvider';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import AWSIotSiteWiseAssetValueVariant from '../constants/AWSIotSiteWiseAssetValueVariant';
import { subscribeToFirestoreDocument, updateFirestoreDocument } from '../providers/FirebaseProvider';
import { documentSnapshotToMeasurement } from '../dataMappers/MeasurementsDataMappers';
import { postIoTSiteWiseAssetValueEntries } from '../providers/IoTSiteWiseProvider';
import { makeAssetValueEntry, mqttMessageToAWSIotSiteWiseAssetValue, valueTypeToAWSIotSiteWiseAssetValueVariant } from '../factories/AWSIotSiteWiseAssetFactory';
import MQTTPublication from '../interfaces/MQTTPublication';

class MeasurementSubscription {
    private measurement: Measurement;

    public constructor(measurement: Measurement) {
        this.measurement = measurement;
    }

    public async subscribeToFirestoreMeasurement(): Promise<void> {
        const { id } = this.measurement;
        const onMeasurementChange = (measurement: Measurement) => {
            this.measurement = measurement;
        };

        subscribeToFirestoreDocument<Measurement>(
            FirestoreDBCollectionNames.Measurements,
            id,
            documentSnapshotToMeasurement,
            onMeasurementChange,
        );
    } 

    public async handleMQTTSubscriptionTopicMessage(message: string): Promise<void> {
        const { valueTypeName } = this.measurement;
        const value = mqttMessageToAWSIotSiteWiseAssetValue(message, valueTypeName);
    
        await this.handleMeasurementAWSIotSiteWiseAssetValeEntryPosts(value);
        this.handleMeasurementMQTTPublications(value);
    }

    private async handleMeasurementAWSIotSiteWiseAssetValeEntryPosts(
        value: valueType,
    ): Promise<void> {
        const {
            workspaceName,
            assetName,
            valueRangeActionProps,
            valueEqualityActionsProps,
        } = this.measurement;

        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        const valueAssetValueEntry = this.makeValueAssetValueEntry(value);
        assetValueEntries.push(valueAssetValueEntry);  

        if (valueRangeActionProps && typeof value === 'number') {
            const valueRangeActionAssetValueEntries = MeasurementSubscription.makeValueRangeActionAssetValueEntries(
                workspaceName,
                assetName,
                value,
                valueRangeActionProps,
            );

            assetValueEntries.push(...valueRangeActionAssetValueEntries);
        }

        if (valueEqualityActionsProps) {
            const equalityAssetValueEntries = MeasurementSubscription.makeValueEqualityActionsAssetValueEntries(
                workspaceName,
                assetName,
                value,
                valueEqualityActionsProps,
            );

            assetValueEntries.push(...equalityAssetValueEntries);
        }

        await postIoTSiteWiseAssetValueEntries(assetValueEntries);
    }

    private makeValueAssetValueEntry(
        value: valueType,
    ): PutAssetPropertyValueEntry {
        const {
            workspaceName,
            assetName,
            valueName,
            valueTypeName,
        } = this.measurement;

        const valueVariant = valueTypeToAWSIotSiteWiseAssetValueVariant(valueTypeName);
        const alias = `/${workspaceName}/${assetName}/${valueName}`;
        const valueAssetValueEntry = makeAssetValueEntry(alias, valueVariant, value);

        return valueAssetValueEntry;
    }

    private static makeValueRangeActionAssetValueEntries(
        workspaceName: string,
        assetName: string,
        value: number,
        valueRangeActionProps: ValueRangeActionProps,
    ): PutAssetPropertyValueEntry[] {
        const {
            minValue,
            maxValue,
            onRangeValueActionProps,
            onUnderMinValueActionProps,
            onOverMaxValueActionProps,
        } = valueRangeActionProps;

        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        if (minValue && value < minValue && onUnderMinValueActionProps) {
            const actionAssetValueEntries = MeasurementSubscription.makeActionAssetValueEntries(
                workspaceName,
                assetName,
                onUnderMinValueActionProps,
            );

            assetValueEntries.push(...actionAssetValueEntries);

            const informationPath = `/${workspaceName}/${assetName}/information`;
            const information = `${minValue} is the min value supported.`;
            const onUnderMinValueInformationEntry = makeAssetValueEntry(
                informationPath,
                AWSIotSiteWiseAssetValueVariant.STRING_VALUE,
                information,
            );

            assetValueEntries.push(onUnderMinValueInformationEntry);
        } else if (maxValue && value > maxValue && onOverMaxValueActionProps) {
            const actionAssetValueEntries = MeasurementSubscription.makeActionAssetValueEntries(
                workspaceName,
                assetName,
                onOverMaxValueActionProps,
            );

            assetValueEntries.push(...actionAssetValueEntries);

            const informationPath = `/${workspaceName}/${assetName}/information`;
            const information = `${maxValue} is the max value supported.`;
            const onOverMaxValueInformationEntry = makeAssetValueEntry(
                informationPath,
                AWSIotSiteWiseAssetValueVariant.STRING_VALUE,
                information,
            );

            assetValueEntries.push(onOverMaxValueInformationEntry);
        } else if (onRangeValueActionProps) {
            const actionAssetValueEntries = MeasurementSubscription.makeActionAssetValueEntries(
                workspaceName,
                assetName,
                onRangeValueActionProps,
            );

            assetValueEntries.push(...actionAssetValueEntries);
        }

        return assetValueEntries;
    }

    private static makeValueEqualityActionsAssetValueEntries(
        workspaceName: string,
        assetName: string,
        value: valueType,
        valueEqualityActionsProps: ValueEqualityActionProps[],
    ): PutAssetPropertyValueEntry[] {
        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        valueEqualityActionsProps.forEach((valueEqualityActionProps: ValueEqualityActionProps) => {
            const actionAssetValueEntries = MeasurementSubscription.makeValueEqualityActionAssetValueEntry(
                workspaceName,
                assetName,
                value,
                valueEqualityActionProps,
            );

            assetValueEntries.push(...actionAssetValueEntries);  
        });

        return assetValueEntries;
    }

    private static makeValueEqualityActionAssetValueEntry(
        workspaceName: string,
        assetName: string,
        value: valueType,
        valueEqualityActionProps: ValueEqualityActionProps,
    ): PutAssetPropertyValueEntry[] {
        const {
            value: currentValue,
            actionProps,
        } = valueEqualityActionProps;

        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        if (value === currentValue && actionProps) {
            const actionAssetValueEntries = MeasurementSubscription.makeActionAssetValueEntries(
                workspaceName,
                assetName,
                actionProps,
            );

            assetValueEntries.push(...actionAssetValueEntries);
        }

        return assetValueEntries;
    }

    private static makeActionAssetValueEntries(
        workspaceName: string,
        assetName: string,
        actionProps: ActionProps,
    ): PutAssetPropertyValueEntry[] {
        const {
            iconType,
            modelShaderColor,
        } = actionProps;

        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        if (iconType) {
            const iconTypePath = `/${workspaceName}/${assetName}/iconType`;
            const iconTypeAssetValueEntry = makeAssetValueEntry(
                iconTypePath,
                AWSIotSiteWiseAssetValueVariant.STRING_VALUE,
                iconType,
            );

            assetValueEntries.push(iconTypeAssetValueEntry);
        }

        if (modelShaderColor) {
            const modelShaderColorPath = `/${workspaceName}/${assetName}/modelShaderColor`;
            const modelShaderColorAssetValueEntry = makeAssetValueEntry(
                modelShaderColorPath,
                AWSIotSiteWiseAssetValueVariant.STRING_VALUE,
                modelShaderColor,
            );

            assetValueEntries.push(modelShaderColorAssetValueEntry);
        }

        return assetValueEntries;
    }

    private handleMeasurementMQTTPublications(
        value: valueType,
    ): void {
        const {
            valueRangeActionProps,
            valueEqualityActionsProps,
        } = this.measurement;

        if (valueRangeActionProps && typeof value === 'number') {
            MeasurementSubscription.handleValueRangeActionMQTTPublications(
                value,
                valueRangeActionProps,
            );
        }

        if (valueEqualityActionsProps) {
            MeasurementSubscription.handleValueEqualityActionsMQTTPublications(
                value,
                valueEqualityActionsProps,
            );
        }
    }

    private static handleValueRangeActionMQTTPublications(
        value: number,
        valueRangeActionProps: ValueRangeActionProps,
    ): void {
        const {
            minValue,
            maxValue,
            onRangeValueActionProps,
            onUnderMinValueActionProps,
            onOverMaxValueActionProps,
        } = valueRangeActionProps;

        if (minValue && value < minValue && onUnderMinValueActionProps) {
            MeasurementSubscription.handleActions(
                onUnderMinValueActionProps,
            );
        } else if (maxValue && value > maxValue && onOverMaxValueActionProps) {
            MeasurementSubscription.handleActions(
                onOverMaxValueActionProps,
            );
        } else if (onRangeValueActionProps) {
            MeasurementSubscription.handleActions(
                onRangeValueActionProps,
            );
        }
    }

    private static handleValueEqualityActionsMQTTPublications(
        value: valueType,
        valueEqualityActionsProps: ValueEqualityActionProps[],
    ): void {
        valueEqualityActionsProps.forEach((valueEqualityActionProps: ValueEqualityActionProps) => {
            MeasurementSubscription.handleValueEqualityActionMQTTPublications(
                value,
                valueEqualityActionProps,
            );
        });
    }

    private static handleValueEqualityActionMQTTPublications(
        value: valueType,
        valueEqualityActionProps: ValueEqualityActionProps,
    ): void {
        const {
            value: currentValue,
            actionProps,
        } = valueEqualityActionProps;

        if (value === currentValue && actionProps) {
            MeasurementSubscription.handleActions(
                actionProps,
            );
        }
    }

    private static handleActions(
        actionProps: ActionProps,
    ): void {
        const { mqttPublications, simulationsPropsUpdateInfo } = actionProps;

        if (mqttPublications) {
            MeasurementSubscription.handleMQTTPublications(mqttPublications);
        }

        if (simulationsPropsUpdateInfo) {
            MeasurementSubscription.handleSimulationsPropsUpdate(simulationsPropsUpdateInfo);
        }
    }

    private static handleMQTTPublications(
        mqttPublications: MQTTPublication[],
    ): void {
        mqttPublications.forEach((mqttPublication) => {
            mqttPublicate(mqttPublication);
        });
    }

    private static handleSimulationsPropsUpdate(
        simulationsPropsUpdateInfo: MeasurementSimulationUpdateInfo[],
    ): void {
        simulationsPropsUpdateInfo.forEach((simulationPropsUpdateInfo) => {
            const { id, ...updateInfo } = simulationPropsUpdateInfo;
            updateFirestoreDocument(
                FirestoreDBCollectionNames.MQTTPublicationsSimulationsProps,
                id,
                updateInfo
            );
        });
    }
}

export default MeasurementSubscription;
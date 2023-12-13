import { PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';
import Sensor, { ActionParams, SensorMeasurementsSimulationParamsPatchInfo, SensorMeasurementEqualityActionParams, SensorMeasurementRangeActionParams, measurementType } from '../interfaces/Sensor';
import { mqttPublicate } from '../providers/MQTTPublicationProvider';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import VALUE_VARIANT from '../constants/AWSIotSiteWiseAssetValueVariant';
import { subscribeToFirestoreDocument, updateFirestoreDocument } from '../providers/FirebaseProvider';
import { documentSnapshotToSensor } from '../dataMappers/SensorsDataMappers';
import { postIoTSiteWiseAssetValueEntries } from '../providers/IoTSiteWiseProvider';
import { makeAssetValueEntry, mqttMessageToAWSIotSiteWiseAssetValue, valueTypeToAWSIotSiteWiseAssetValueVariant } from '../factories/AWSIotSiteWiseAssetFactory';
import MQTTPublication from '../interfaces/MQTTPublication';

class SensorSubscription {
    private sensor: Sensor;

    public constructor(sensor: Sensor) {
        this.sensor = sensor;
    }

    public async subscribeToFirestoreSensor(): Promise<void> {
        const { id } = this.sensor;
        const onSensorChange = (sensor: Sensor) => {
            this.sensor = sensor;
        };

        subscribeToFirestoreDocument<Sensor>(
            FirestoreDBCollectionNames.Sensors,
            id,
            documentSnapshotToSensor,
            onSensorChange,
        );
    } 

    public async handleMQTTSubscriptionTopicMessage(message: string): Promise<void> {
        const { measurementType } = this.sensor;
        const value = mqttMessageToAWSIotSiteWiseAssetValue(message, measurementType);
    
        await this.handleMeasurementAWSIotSiteWiseAssetValeEntryPosts(value);
        this.handleMeasurementMQTTPublications(value);
    }

    private async handleMeasurementAWSIotSiteWiseAssetValeEntryPosts(
        value: measurementType,
    ): Promise<void> {
        const {
            workspaceName,
            assetName,
            measurementRangeActionParams,
            measurementEqualityActionsParams,
        } = this.sensor;

        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        const valueAssetValueEntry = this.makeValueAssetValueEntry(value);
        assetValueEntries.push(valueAssetValueEntry);  

        if (measurementRangeActionParams && typeof value === 'number') {
            const valueRangeActionAssetValueEntries = SensorSubscription.makeValueRangeActionAssetValueEntries(
                workspaceName,
                assetName,
                value,
                measurementRangeActionParams,
            );

            assetValueEntries.push(...valueRangeActionAssetValueEntries);
        }

        if (measurementEqualityActionsParams) {
            const equalityAssetValueEntries = SensorSubscription.makeValueEqualityActionsAssetValueEntries(
                workspaceName,
                assetName,
                value,
                measurementEqualityActionsParams,
            );

            assetValueEntries.push(...equalityAssetValueEntries);
        }

        await postIoTSiteWiseAssetValueEntries(assetValueEntries);
    }

    private makeValueAssetValueEntry(
        value: measurementType,
    ): PutAssetPropertyValueEntry {
        const {
            workspaceName,
            assetName,
            valueName,
            measurementType,
        } = this.sensor;

        const valueVariant = valueTypeToAWSIotSiteWiseAssetValueVariant(measurementType);
        const alias = `/${workspaceName}/${assetName}/${valueName}`;
        const valueAssetValueEntry = makeAssetValueEntry(alias, valueVariant, value);

        return valueAssetValueEntry;
    }

    private static makeValueRangeActionAssetValueEntries(
        workspaceName: string,
        assetName: string,
        value: number,
        measurementRangeActionParams: SensorMeasurementRangeActionParams,
    ): PutAssetPropertyValueEntry[] {
        const {
            minMeasurement,
            maxMeasurement,
            onRangeMeasurementActionParams,
            onUnderMinMeasurementActionParams,
            onOverMaxMeasurementActionParams,
        } = measurementRangeActionParams;

        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        if (minMeasurement && value < minMeasurement && onUnderMinMeasurementActionParams) {
            const actionAssetValueEntries = SensorSubscription.makeActionAssetValueEntries(
                workspaceName,
                assetName,
                onUnderMinMeasurementActionParams,
            );

            assetValueEntries.push(...actionAssetValueEntries);

            const informationPath = `/${workspaceName}/${assetName}/information`;
            const information = `${minMeasurement} is the min value supported.`;
            const onUnderMinMeasurementInformationEntry = makeAssetValueEntry(
                informationPath,
                VALUE_VARIANT.STRING_VALUE,
                information,
            );

            assetValueEntries.push(onUnderMinMeasurementInformationEntry);
        } else if (maxMeasurement && value > maxMeasurement && onOverMaxMeasurementActionParams) {
            const actionAssetValueEntries = SensorSubscription.makeActionAssetValueEntries(
                workspaceName,
                assetName,
                onOverMaxMeasurementActionParams,
            );

            assetValueEntries.push(...actionAssetValueEntries);

            const informationPath = `/${workspaceName}/${assetName}/information`;
            const information = `${maxMeasurement} is the max value supported.`;
            const onOverMaxMeasurementInformationEntry = makeAssetValueEntry(
                informationPath,
                VALUE_VARIANT.STRING_VALUE,
                information,
            );

            assetValueEntries.push(onOverMaxMeasurementInformationEntry);
        } else if (onRangeMeasurementActionParams) {
            const actionAssetValueEntries = SensorSubscription.makeActionAssetValueEntries(
                workspaceName,
                assetName,
                onRangeMeasurementActionParams,
            );

            assetValueEntries.push(...actionAssetValueEntries);
        }

        return assetValueEntries;
    }

    private static makeValueEqualityActionsAssetValueEntries(
        workspaceName: string,
        assetName: string,
        value: measurementType,
        measurementEqualityActionsParams: SensorMeasurementEqualityActionParams[],
    ): PutAssetPropertyValueEntry[] {
        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        measurementEqualityActionsParams.forEach((measurementEqualityActionParams: SensorMeasurementEqualityActionParams) => {
            const actionAssetValueEntries = SensorSubscription.makeValueEqualityActionAssetValueEntry(
                workspaceName,
                assetName,
                value,
                measurementEqualityActionParams,
            );

            assetValueEntries.push(...actionAssetValueEntries);  
        });

        return assetValueEntries;
    }

    private static makeValueEqualityActionAssetValueEntry(
        workspaceName: string,
        assetName: string,
        value: measurementType,
        measurementEqualityActionParams: SensorMeasurementEqualityActionParams,
    ): PutAssetPropertyValueEntry[] {
        const {
            measurement: currentValue,
            actionParams,
        } = measurementEqualityActionParams;

        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        if (value === currentValue && actionParams) {
            const actionAssetValueEntries = SensorSubscription.makeActionAssetValueEntries(
                workspaceName,
                assetName,
                actionParams,
            );

            assetValueEntries.push(...actionAssetValueEntries);
        }

        return assetValueEntries;
    }

    private static makeActionAssetValueEntries(
        workspaceName: string,
        assetName: string,
        actionParams: ActionParams,
    ): PutAssetPropertyValueEntry[] {
        const {
            iconType,
            modelShaderColor,
        } = actionParams;

        const assetValueEntries: PutAssetPropertyValueEntry[] = [];

        if (iconType) {
            const iconTypePath = `/${workspaceName}/${assetName}/iconType`;
            const iconTypeAssetValueEntry = makeAssetValueEntry(
                iconTypePath,
                VALUE_VARIANT.STRING_VALUE,
                iconType,
            );

            assetValueEntries.push(iconTypeAssetValueEntry);
        }

        if (modelShaderColor) {
            const modelShaderColorPath = `/${workspaceName}/${assetName}/modelShaderColor`;
            const modelShaderColorAssetValueEntry = makeAssetValueEntry(
                modelShaderColorPath,
                VALUE_VARIANT.STRING_VALUE,
                modelShaderColor,
            );

            assetValueEntries.push(modelShaderColorAssetValueEntry);
        }

        return assetValueEntries;
    }

    private handleMeasurementMQTTPublications(
        value: measurementType,
    ): void {
        const {
            measurementRangeActionParams,
            measurementEqualityActionsParams,
        } = this.sensor;

        if (measurementRangeActionParams && typeof value === 'number') {
            SensorSubscription.handleValueRangeActionMQTTPublications(
                value,
                measurementRangeActionParams,
            );
        }

        if (measurementEqualityActionsParams) {
            SensorSubscription.handleValueEqualityActionsMQTTPublications(
                value,
                measurementEqualityActionsParams,
            );
        }
    }

    private static handleValueRangeActionMQTTPublications(
        value: number,
        measurementRangeActionParams: SensorMeasurementRangeActionParams,
    ): void {
        const {
            minMeasurement,
            maxMeasurement,
            onRangeMeasurementActionParams,
            onUnderMinMeasurementActionParams,
            onOverMaxMeasurementActionParams,
        } = measurementRangeActionParams;

        if (minMeasurement && value < minMeasurement && onUnderMinMeasurementActionParams) {
            SensorSubscription.handleActions(
                onUnderMinMeasurementActionParams,
            );
        } else if (maxMeasurement && value > maxMeasurement && onOverMaxMeasurementActionParams) {
            SensorSubscription.handleActions(
                onOverMaxMeasurementActionParams,
            );
        } else if (onRangeMeasurementActionParams) {
            SensorSubscription.handleActions(
                onRangeMeasurementActionParams,
            );
        }
    }

    private static handleValueEqualityActionsMQTTPublications(
        value: measurementType,
        measurementEqualityActionsParams: SensorMeasurementEqualityActionParams[],
    ): void {
        measurementEqualityActionsParams.forEach((measurementEqualityActionParams: SensorMeasurementEqualityActionParams) => {
            SensorSubscription.handleValueEqualityActionMQTTPublications(
                value,
                measurementEqualityActionParams,
            );
        });
    }

    private static handleValueEqualityActionMQTTPublications(
        value: measurementType,
        measurementEqualityActionParams: SensorMeasurementEqualityActionParams,
    ): void {
        const {
            measurement: currentValue,
            actionParams,
        } = measurementEqualityActionParams;

        if (value === currentValue && actionParams) {
            SensorSubscription.handleActions(
                actionParams,
            );
        }
    }

    private static handleActions(
        actionParams: ActionParams,
    ): void {
        const { mqttPublications, sensorMeasurementsSimulationParamsPatchInfo } = actionParams;

        if (mqttPublications) {
            SensorSubscription.handleMQTTPublications(mqttPublications);
        }

        if (sensorMeasurementsSimulationParamsPatchInfo) {
            SensorSubscription.handleSimulationsPropsUpdate(sensorMeasurementsSimulationParamsPatchInfo);
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
        sensorMeasurementsSimulationParamsPatchInfo: SensorMeasurementsSimulationParamsPatchInfo[],
    ): void {
        sensorMeasurementsSimulationParamsPatchInfo.forEach((simulationPropsUpdateInfo) => {
            const { id, ...updateInfo } = simulationPropsUpdateInfo;
            updateFirestoreDocument(
                FirestoreDBCollectionNames.SensorMeasurementsSimulationsParams,
                id,
                updateInfo
            );
        });
    }
}

export default SensorSubscription;
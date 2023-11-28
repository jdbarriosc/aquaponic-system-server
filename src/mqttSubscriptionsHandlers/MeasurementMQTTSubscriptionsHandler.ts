import Measurement, { ActionProps, ValueRangeActionProps } from '../interfaces/Measurement';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { querySnapshotToMeasurement } from '../dataMappers/MeasurementsDataMappers';
import { getFirestoreDBCollectionDocuments } from '../providers/FirebaseConnectionProvider';
import { makeAssetValueEntry, mqttMessageToAWSIotSiteWiseAssetValue, valueTypeToAWSIotSiteWiseAssetValueVariant } from '../factories/AWSIotSiteWiseAssetFactory';
import AWSIotSiteWiseAssetValueVariant from '../constants/AWSIotSiteWiseAssetValueVariant';
import { PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';
import AWSIotSiteWiseService from '../services/AWSIotSiteWiseService';
import { stringToNumber } from '../factories/NumberFactory';

class MeasurementMQTTSubscriptionsHandler {
  public static async handleMeasurementPathMQTTMessageReceived(message: string, measurement: Measurement): Promise<void> {
    const {
      workspaceName,
      assetName,
      name,
      valueType,
      valueRangeActionProps,
      valueEqualityActionProps,
    } = measurement;

    const assetValueEntries: PutAssetPropertyValueEntry[] = [];

    const valueAssetValueEntry = MeasurementMQTTSubscriptionsHandler.getAssetValueEntry(message, measurement);
    assetValueEntries.push(valueAssetValueEntry);  

    if (valueRangeActionProps) {
      const numberValue = stringToNumber(message);
      const rangeAssetValueEntries = MeasurementMQTTSubscriptionsHandler.getAssetValueRangeEntries(
        workspaceName,
        assetName,
        numberValue,
        valueRangeActionProps,
      );

      assetValueEntries.push(...rangeAssetValueEntries);
    }

    await AWSIotSiteWiseService.postAssetValueEntries(assetValueEntries);
  }

  private static getAssetValueEntry(message: string, measurement: Measurement): PutAssetPropertyValueEntry {
    const {
      workspaceName,
      assetName,
      name,
      valueType,
    } = measurement;

    const valueVariant = valueTypeToAWSIotSiteWiseAssetValueVariant(valueType);
    const value = mqttMessageToAWSIotSiteWiseAssetValue(message, valueType);
    const alias = `/${workspaceName}/${assetName}/${name}`;
    const valueAssetValueEntry = makeAssetValueEntry(alias, valueVariant, value);

    return valueAssetValueEntry;
  }

  private static getAssetValueRangeEntries(
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
      const actionPropsAssetValueEntries = MeasurementMQTTSubscriptionsHandler.geActionPropsEntries(
        workspaceName,
        assetName,
        onUnderMinValueActionProps,
      );

      assetValueEntries.push(...actionPropsAssetValueEntries);
    } else if (maxValue && value > maxValue && onOverMaxValueActionProps) {
      const actionPropsAssetValueEntries = MeasurementMQTTSubscriptionsHandler.geActionPropsEntries(
        workspaceName,
        assetName,
        onOverMaxValueActionProps,
      );

      assetValueEntries.push(...actionPropsAssetValueEntries);
    } else if (onRangeValueActionProps) {
      const actionPropsAssetValueEntries = MeasurementMQTTSubscriptionsHandler.geActionPropsEntries(
        workspaceName,
        assetName,
        onRangeValueActionProps,
      );

      assetValueEntries.push(...actionPropsAssetValueEntries);
    }

    return assetValueEntries;
  }

  private static geActionPropsEntries(
    workspaceName: string,
    assetName: string,
    actionProps: ActionProps,
  ): PutAssetPropertyValueEntry[] {
    const {
      iconType,
      modelShaderColor
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
}

export default MeasurementMQTTSubscriptionsHandler;
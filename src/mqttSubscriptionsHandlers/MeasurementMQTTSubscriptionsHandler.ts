import { PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';
import { stringToNumber } from '../factories/NumberFactory';
import AWSIotSiteWiseService from '../services/AWSIotSiteWiseService';
import AWSIotSiteWiseAssetValueVariant from '../constants/AWSIotSiteWiseAssetValueVariant';
import Measurement, { ActionProps, ValueEqualityActionProps, ValueRangeActionProps } from '../interfaces/Measurement';
import { makeAssetValueEntry, mqttMessageToAWSIotSiteWiseAssetValue, valueTypeToAWSIotSiteWiseAssetValueVariant } from '../factories/AWSIotSiteWiseAssetFactory';

class MeasurementMQTTSubscriptionsHandler {
  public static async handleMeasurementPathMQTTMessageReceived(message: string, measurement: Measurement): Promise<void> {
    

    await MeasurementMQTTSubscriptionsHandler.handleMeasurementAWSIotSiteWiseAssetValeEntryPosts(message, measurement);
  }

  private static async handleMeasurementAWSIotSiteWiseAssetValeEntryPosts(message: string, measurement: Measurement): Promise<void> {
    const {
      workspaceName,
      valueType,
      assetName,
      valueRangeActionProps,
      valueEqualityActionsProps,
    } = measurement;

    const assetValueEntries: PutAssetPropertyValueEntry[] = [];

    const valueAssetValueEntry = MeasurementMQTTSubscriptionsHandler.makeValueAssetValueEntry(message, measurement);
    assetValueEntries.push(valueAssetValueEntry);  

    if (valueRangeActionProps) {
      const numberValue = stringToNumber(message);
      const valueRangeActionAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeValueRangeActionAssetValueEntries(
        workspaceName,
        assetName,
        numberValue,
        valueRangeActionProps,
      );

      assetValueEntries.push(...valueRangeActionAssetValueEntries);
    }

    if (valueEqualityActionsProps) {
      const parsedValue = mqttMessageToAWSIotSiteWiseAssetValue(message, valueType);
      const equalityAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeValueEqualityActionsAssetValueEntries(
        workspaceName,
        assetName,
        parsedValue,
        valueEqualityActionsProps,
      );

      assetValueEntries.push(...equalityAssetValueEntries);
    }

    await AWSIotSiteWiseService.postAssetValueEntries(assetValueEntries);
  }

  private static makeValueAssetValueEntry(message: string, measurement: Measurement): PutAssetPropertyValueEntry {
    const {
      workspaceName,
      assetName,
      valueName,
      valueType,
    } = measurement;

    const valueVariant = valueTypeToAWSIotSiteWiseAssetValueVariant(valueType);
    const value = mqttMessageToAWSIotSiteWiseAssetValue(message, valueType);
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
      const actionAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeActionAssetValueEntries(
        workspaceName,
        assetName,
        onUnderMinValueActionProps,
      );

      assetValueEntries.push(...actionAssetValueEntries);
    } else if (maxValue && value > maxValue && onOverMaxValueActionProps) {
      const actionAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeActionAssetValueEntries(
        workspaceName,
        assetName,
        onOverMaxValueActionProps,
      );

      assetValueEntries.push(...actionAssetValueEntries);
    } else if (onRangeValueActionProps) {
      const actionAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeActionAssetValueEntries(
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
    value: string | number | boolean,
    valueEqualityActionsProps: ValueEqualityActionProps[],
  ): PutAssetPropertyValueEntry[] {
    const assetValueEntries: PutAssetPropertyValueEntry[] = [];

    valueEqualityActionsProps.forEach((valueEqualityActionProps: ValueEqualityActionProps) => {
      const actionAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeValueEqualityActionAssetValueEntry(
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
    value: string | number | boolean,
    valueEqualityActionProps: ValueEqualityActionProps,
  ): PutAssetPropertyValueEntry[] {
    const {
      value: currentValue,
      actionProps,
    } = valueEqualityActionProps;

    const assetValueEntries: PutAssetPropertyValueEntry[] = [];

    if (value === currentValue && actionProps) {
      const actionAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeActionAssetValueEntries(
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

import { PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';
import { mqttPublicate } from '../providers/MQTTPublicationProvider';
import AWSIotSiteWiseService from '../services/AWSIotSiteWiseService';
import AWSIotSiteWiseAssetValueVariant from '../constants/AWSIotSiteWiseAssetValueVariant';
import Measurement, { ActionProps, ValueEqualityActionProps, ValueRangeActionProps, valueType } from '../interfaces/Measurement';
import { makeAssetValueEntry, mqttMessageToAWSIotSiteWiseAssetValue, valueTypeToAWSIotSiteWiseAssetValueVariant } from '../factories/AWSIotSiteWiseAssetFactory';

class MeasurementMQTTSubscriptionsHandler {
  public static async handleMeasurementPathMQTTMessageReceived(
    message: string,
    measurement: Measurement,
  ): Promise<void> {
    const { valueTypeName } = measurement;
    const value = mqttMessageToAWSIotSiteWiseAssetValue(message, valueTypeName);

    await MeasurementMQTTSubscriptionsHandler.handleMeasurementAWSIotSiteWiseAssetValeEntryPosts(value, measurement);
    MeasurementMQTTSubscriptionsHandler.handleMeasurementMQTTPublications(value, measurement);
  }

  private static async handleMeasurementAWSIotSiteWiseAssetValeEntryPosts(
    value: valueType,
    measurement: Measurement,
  ): Promise<void> {
    const {
      workspaceName,
      assetName,
      valueRangeActionProps,
      valueEqualityActionsProps,
    } = measurement;

    const assetValueEntries: PutAssetPropertyValueEntry[] = [];

    const valueAssetValueEntry = MeasurementMQTTSubscriptionsHandler.makeValueAssetValueEntry(value, measurement);
    assetValueEntries.push(valueAssetValueEntry);  

    if (valueRangeActionProps && typeof value === 'number') {
      const valueRangeActionAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeValueRangeActionAssetValueEntries(
        workspaceName,
        assetName,
        value,
        valueRangeActionProps,
      );

      assetValueEntries.push(...valueRangeActionAssetValueEntries);
    }

    if (valueEqualityActionsProps) {
      const equalityAssetValueEntries = MeasurementMQTTSubscriptionsHandler.makeValueEqualityActionsAssetValueEntries(
        workspaceName,
        assetName,
        value,
        valueEqualityActionsProps,
      );

      assetValueEntries.push(...equalityAssetValueEntries);
    }

    await AWSIotSiteWiseService.postAssetValueEntries(assetValueEntries);
  }

  private static makeValueAssetValueEntry(
    value: valueType,
    measurement: Measurement,
  ): PutAssetPropertyValueEntry {
    const {
      workspaceName,
      assetName,
      valueName,
      valueTypeName,
    } = measurement;

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
    value: valueType,
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
    value: valueType,
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

  private static handleMeasurementMQTTPublications(
    value: valueType,
    measurement: Measurement,
  ): void {
    const {
      valueRangeActionProps,
      valueEqualityActionsProps,
    } = measurement;

    if (valueRangeActionProps && typeof value === 'number') {
      MeasurementMQTTSubscriptionsHandler.handleValueRangeActionMQTTPublications(
        value,
        valueRangeActionProps,
      );
    }

    if (valueEqualityActionsProps) {
      MeasurementMQTTSubscriptionsHandler.handleValueEqualityActionsMQTTPublications(
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
      MeasurementMQTTSubscriptionsHandler.handleActionMQTTPublications(
        onUnderMinValueActionProps,
      );
    } else if (maxValue && value > maxValue && onOverMaxValueActionProps) {
      MeasurementMQTTSubscriptionsHandler.handleActionMQTTPublications(
        onOverMaxValueActionProps,
      );
    } else if (onRangeValueActionProps) {
      MeasurementMQTTSubscriptionsHandler.handleActionMQTTPublications(
        onRangeValueActionProps,
      );
    }
  }


  private static handleValueEqualityActionsMQTTPublications(
    value: valueType,
    valueEqualityActionsProps: ValueEqualityActionProps[],
  ): void {
    valueEqualityActionsProps.forEach((valueEqualityActionProps: ValueEqualityActionProps) => {
      MeasurementMQTTSubscriptionsHandler.handleValueEqualityActionMQTTPublications(
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
      MeasurementMQTTSubscriptionsHandler.handleActionMQTTPublications(
        actionProps,
      );
    }
  }

  private static handleActionMQTTPublications(
    actionProps: ActionProps,
  ): void {
    const { mqttPublication } = actionProps;

    if (mqttPublication) {
      mqttPublicate(mqttPublication);
    }
  }
}

export default MeasurementMQTTSubscriptionsHandler;

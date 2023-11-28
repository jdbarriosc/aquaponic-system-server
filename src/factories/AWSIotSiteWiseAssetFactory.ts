import { v4 as uuidv4 } from 'uuid';
import { PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';
import AWSIotSiteWiseAssetValueVariant from '../constants/AWSIotSiteWiseAssetValueVariant';
import { ValueType } from '../interfaces/Measurement';
import { stringToNumber } from './NumberFactory';
import { stringToBoolean } from './BooleanFactory';

function makeAssetValueEntry(
    propertyAlias: string,
    valueVariant: AWSIotSiteWiseAssetValueVariant,
    value: string | number | boolean,
): PutAssetPropertyValueEntry {
    const entryId = uuidv4();;
    const timeInSeconds = Math.round(new Date().getTime() / 1000);

    const assetValueEntry: PutAssetPropertyValueEntry = { 
        entryId,
        propertyAlias,
        propertyValues: [
          { 
            value: { 
              [valueVariant]: value,
            },
            timestamp: {
              timeInSeconds,
            },
            quality: 'GOOD',
          },
        ],
      };

    return assetValueEntry;
}

function valueTypeToAWSIotSiteWiseAssetValueVariant(valueType: ValueType): AWSIotSiteWiseAssetValueVariant {
  let valueVariant = AWSIotSiteWiseAssetValueVariant.STRING_VALUE;

  switch(valueType) {
      case ValueType.STRING:
          valueVariant = AWSIotSiteWiseAssetValueVariant.STRING_VALUE;
          break;
      case ValueType.NUMBER:
          valueVariant = AWSIotSiteWiseAssetValueVariant.DOUBLE_VALUE;
          break;
      case ValueType.BOOLEAN:
          valueVariant = AWSIotSiteWiseAssetValueVariant.BOOLEAN_VALUE;
          break;
      default:
          break;
  }

  return valueVariant;
}

function mqttMessageToAWSIotSiteWiseAssetValue(message: string, valueType: ValueType): string | number | boolean {
  let value: string | number | boolean = message;

  switch(valueType) {
      case ValueType.STRING:
          value = message;
          break;
      case ValueType.NUMBER:
          value = stringToNumber(message);
          break;
      case ValueType.BOOLEAN:
          value = stringToBoolean(message);
          break;
      default:
          break;
  }

  return value;
}

export {
    makeAssetValueEntry,
    valueTypeToAWSIotSiteWiseAssetValueVariant,
    mqttMessageToAWSIotSiteWiseAssetValue,
};
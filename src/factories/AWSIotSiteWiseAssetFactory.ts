import { v4 as uuidv4 } from 'uuid';
import { PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';
import { ValueTypeName, valueType } from '../interfaces/Measurement';
import { stringToNumber } from './NumberFactory';
import { stringToBoolean } from './BooleanFactory';
import AWSIotSiteWiseAssetValueVariant from '../constants/AWSIotSiteWiseAssetValueVariant';

function valueTypeToAWSIotSiteWiseAssetValueVariant(valueTypeName: ValueTypeName): AWSIotSiteWiseAssetValueVariant {
  let valueVariant = AWSIotSiteWiseAssetValueVariant.STRING_VALUE;

  switch(valueTypeName) {
      case ValueTypeName.STRING:
          valueVariant = AWSIotSiteWiseAssetValueVariant.STRING_VALUE;
          break;
      case ValueTypeName.NUMBER:
          valueVariant = AWSIotSiteWiseAssetValueVariant.DOUBLE_VALUE;
          break;
      case ValueTypeName.BOOLEAN:
          valueVariant = AWSIotSiteWiseAssetValueVariant.BOOLEAN_VALUE;
          break;
      default:
          break;
  }

  return valueVariant;
}

function mqttMessageToAWSIotSiteWiseAssetValue(message: string, valueTypeName: ValueTypeName): valueType {
  let value: valueType = message;

  switch(valueTypeName) {
      case ValueTypeName.STRING:
          value = message;
          break;
      case ValueTypeName.NUMBER:
          value = stringToNumber(message);
          break;
      case ValueTypeName.BOOLEAN:
          value = stringToBoolean(message);
          break;
      default:
          break;
  }

  return value;
}

function makeAssetValueEntry(
    propertyAlias: string,
    valueVariant: AWSIotSiteWiseAssetValueVariant,
    value: valueType,
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

export {
  valueTypeToAWSIotSiteWiseAssetValueVariant,
  mqttMessageToAWSIotSiteWiseAssetValue,
  makeAssetValueEntry,
};
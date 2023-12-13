import { v4 as uuidv4 } from 'uuid';
import { PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';
import { MEASUREMENT_TYPE, measurementType } from '../interfaces/Sensor';
import { stringToNumber } from './NumberFactory';
import { stringToBoolean } from './BooleanFactory';
import VALUE_VARIANT from '../constants/AWSIotSiteWiseAssetValueVariant';

//TODO revisar nombres

function valueTypeToAWSIotSiteWiseAssetValueVariant(measurementType: MEASUREMENT_TYPE): VALUE_VARIANT {
  let valueVariant = VALUE_VARIANT.STRING_VALUE;

  switch(measurementType) {
      case MEASUREMENT_TYPE.STRING:
          valueVariant = VALUE_VARIANT.STRING_VALUE;
          break;
      case MEASUREMENT_TYPE.NUMBER:
          valueVariant = VALUE_VARIANT.DOUBLE_VALUE;
          break;
      case MEASUREMENT_TYPE.BOOLEAN:
          valueVariant = VALUE_VARIANT.BOOLEAN_VALUE;
          break;
      default:
          break;
  }

  return valueVariant;
}

function mqttMessageToAWSIotSiteWiseAssetValue(message: string, measurementType: MEASUREMENT_TYPE): measurementType {
  let value: measurementType = message;

  switch(measurementType) {
      case MEASUREMENT_TYPE.STRING:
          value = message;
          break;
      case MEASUREMENT_TYPE.NUMBER:
          value = stringToNumber(message);
          break;
      case MEASUREMENT_TYPE.BOOLEAN:
          value = stringToBoolean(message);
          break;
      default:
          break;
  }

  return value;
}

function makeAssetValueEntry(
    propertyAlias: string,
    valueVariant: VALUE_VARIANT,
    value: measurementType,
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
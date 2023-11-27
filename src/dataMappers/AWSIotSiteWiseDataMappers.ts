import { ValueType } from '../interfaces/Measurement';
import AWSIotSiteWiseAssetPropertyValueVariant from '../constants/AWSIotSiteWiseAssetPropertyValueVariant';

function valueTypeToAWSIotSiteWiseAssetPropertyValueVariant(valueType: ValueType): AWSIotSiteWiseAssetPropertyValueVariant {
    let valueVariant: AWSIotSiteWiseAssetPropertyValueVariant = AWSIotSiteWiseAssetPropertyValueVariant.STRING_VALUE;

    switch(valueType) {
        case ValueType.STRING:
            valueVariant = AWSIotSiteWiseAssetPropertyValueVariant.STRING_VALUE;
            break;
        case ValueType.NUMBER:
            valueVariant = AWSIotSiteWiseAssetPropertyValueVariant.DOUBLE_VALUE;
            break;
        case ValueType.BOOLEAN:
            valueVariant = AWSIotSiteWiseAssetPropertyValueVariant.BOOLEAN_VALUE;
            break;
        default:
            break;
    }

    return valueVariant;
}

export {
    valueTypeToAWSIotSiteWiseAssetPropertyValueVariant,
};
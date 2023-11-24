export enum ValueVariant {
    STRING_VALUE = 'stringValue',
    INTEGER_VALUE = 'integerValue',
    DOUBLE_VALUE = 'doubleValue',
    BOOLEAN_VALUE = 'booleanValue',
}

export interface AssetPropertyValueEntryBaseProps {
    propertyAlias?: string;
    valueVariant: ValueVariant;
    value: string | number | boolean;
}

export interface AssetMeasurement {
    name: string;
    alias: string;
    unit?: string;
}

interface AWSIoTSiteWiseAsset {
    id: string;
    name: string;
    workspace: string;
    measurements: AssetMeasurement[];
}

export default AWSIoTSiteWiseAsset;
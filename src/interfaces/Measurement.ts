import MQTTPublication from './MQTTPublication';

export type valueType = string | number | boolean;

export enum ValueTypeName {
    STRING = 'STRING',
    NUMBER = 'NUMBER', 
    BOOLEAN = 'BOOLEAN', 
} 

export enum IconType {
    INFO = 'INFO', 
    WARNING = 'WARNING',
    ERROR = 'ERROR', 
} 

export enum ModelShaderColor {
    GREEN = 'GREEN',
    BLUE = 'BLUE', 
    RED = 'RED', 
    PURPLE = 'PURPLE', 
}

export interface ActionProps {
    mqttPublication?: MQTTPublication;
    iconType?: IconType;
    modelShaderColor?: ModelShaderColor;
}

export interface ValueEqualityActionProps {
    value: valueType;
    actionProps?: ActionProps;
}

export interface ValueRangeActionProps {
    minValue?: number;
    maxValue?: number;
    onRangeValueActionProps?: ActionProps;
    onUnderMinValueActionProps?: ActionProps;
    onOverMaxValueActionProps?: ActionProps;
}

interface Measurement {
    id: string,
    workspaceName: string,
    assetName: string,
    valueName: string;
    mqttSubscriptionTopic: string;
    unit?: string;
    valueTypeName: ValueTypeName;
    valueRangeActionProps?: ValueRangeActionProps;
    valueEqualityActionsProps?: ValueEqualityActionProps[];
}

export default Measurement;
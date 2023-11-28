import MQTTPublication from './MQTTPublication';

export enum ValueType {
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
    value: string | number | boolean;
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
    valueType: ValueType;
    valueRangeActionProps?: ValueRangeActionProps;
    valueEqualityActionsProps?: ValueEqualityActionProps[];
}

export default Measurement;
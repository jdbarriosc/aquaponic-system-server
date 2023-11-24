import MQTTPublication from "./MQTTPublication";

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

interface ValueEqualityActionProps {
    value: boolean | string;
    mqttPublication?: MQTTPublication;
    iconType?: IconType;
    modelShaderColor?: ModelShaderColor;
}

interface ValueRangeActionProps {
    minValue?: number;
    onUnderMinValueMQTTPublication?: MQTTPublication;
    onUnderMinValueIconType?: IconType;
    onUnderMinValueModelShaderColor?: ModelShaderColor;
    maxValue?: number;
    onOverMaxValueMQTTPublication?: MQTTPublication;
    onOverMaxValueIconType?: IconType;
    onOverMaxValueModelShaderColor?: ModelShaderColor;
}

interface Sensor {
    id: string;
    workspace: string;
    name: string;
    measurement: string;
    path: string;
    unit?: string;
    valueRangeActionProps?: ValueRangeActionProps;
    valueEqualityActionProps?: ValueEqualityActionProps[];
}

export default Sensor;
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

interface ActionProps {
    mqttPublication?: MQTTPublication;
    iconType?: IconType;
    modelShaderColor?: ModelShaderColor;
}

interface ValueEqualityActionProps {
    value: boolean | string;
    actionProps?: ActionProps;
}

interface ValueRangeActionProps {
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
    name: string;
    path: string;
    unit?: string;
    valueRangeActionProps?: ValueRangeActionProps;
    valueEqualityActionProps?: ValueEqualityActionProps[];
}

export default Measurement;
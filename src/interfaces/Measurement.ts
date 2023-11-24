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

export enum SimulationType {
    STATIC = 'STATIC',
    RANDOM = 'RANDOM',
    INCREMENT = 'INCREMENT', 
    DECREASE = 'DECREASE', 
    INCREMENT_DECREASE_RANDOM = 'INCREMENT_DECREASE_RANDOM', 
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

interface SimulationProps {
    simulationType: SimulationType;
    startValue: string | number | boolean;
    msBetweenDataPublishes?: number;
    variationFactor?: number;
    minValue?: number;
    maxValue?: number;
    posibleValues?: string[] | boolean[];
}

interface Measurement {
    id: string,
    workspaceName: string,
    assetName: string,
    name: string;
    aliasPath: string;
    unit?: string;
    valueRangeActionProps?: ValueRangeActionProps;
    valueEqualityActionProps?: ValueEqualityActionProps[];
    simulationProps?: SimulationProps;
}

export default Measurement;
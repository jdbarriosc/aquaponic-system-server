import MQTTPublication from './MQTTPublication';
import MQTTPublicationsSimulationProps from './MQTTPublicationsSimulationProps';
import OptionalExceptFor from './typeFactories/OptionalExceptFor';

export type valueType = string | number | boolean;

export enum VALUE_TYPE_NAME {
    STRING = 'STRING',
    NUMBER = 'NUMBER', 
    BOOLEAN = 'BOOLEAN', 
} 

export enum ICON_TYPE {
    INFO = 'INFO', 
    WARNING = 'WARNING',
    ERROR = 'ERROR', 
} 

export enum MODEL_SHADER_COLOR {
    GREEN = 'GREEN',
    BLUE = 'BLUE', 
    RED = 'RED', 
    PURPLE = 'PURPLE', 
}

export type MeasurementSimulationUpdateInfo = OptionalExceptFor<
    MQTTPublicationsSimulationProps,
    'id'
>;

export interface ActionProps {
    iconType?: ICON_TYPE;
    modelShaderColor?: MODEL_SHADER_COLOR;
    mqttPublications?: MQTTPublication[];
    simulationsPropsUpdateInfo?: MeasurementSimulationUpdateInfo[];
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
    valueTypeName: VALUE_TYPE_NAME;
    valueRangeActionProps?: ValueRangeActionProps;
    valueEqualityActionsProps?: ValueEqualityActionProps[];
}

export default Measurement;
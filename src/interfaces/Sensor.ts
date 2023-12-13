import MQTTPublication from './MQTTPublication';
import SensorMeasurementsSimulationParams from './SensorMeasurementsSimulationParams';
import OptionalExceptFor from './typeFactories/OptionalExceptFor';

export type measurementType = string | number | boolean;

export enum MEASUREMENT_TYPE {
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

export type SensorMeasurementsSimulationParamsPatchInfo = OptionalExceptFor<
    SensorMeasurementsSimulationParams,
    'id'
>;

export interface ActionParams {
    iconType?: ICON_TYPE;
    modelShaderColor?: MODEL_SHADER_COLOR;
    mqttPublications?: MQTTPublication[];
    sensorMeasurementsSimulationParamsPatchInfo?: SensorMeasurementsSimulationParamsPatchInfo[];
}

export interface SensorMeasurementEqualityActionParams {
    measurement: measurementType;
    actionParams?: ActionParams;
}

export interface SensorMeasurementRangeActionParams {
    minMeasurement?: number;
    maxMeasurement?: number;
    onRangeMeasurementActionParams?: ActionParams;
    onUnderMinMeasurementActionParams?: ActionParams;
    onOverMaxMeasurementActionParams?: ActionParams;
}

interface Sensor {
    id: string,
    workspaceName: string,
    assetName: string,
    valueName: string;
    mqttSubscriptionTopic: string;
    unit?: string;
    measurementType: MEASUREMENT_TYPE;
    measurementRangeActionParams?: SensorMeasurementRangeActionParams;
    measurementEqualityActionsParams?: SensorMeasurementEqualityActionParams[];
}

export default Sensor;
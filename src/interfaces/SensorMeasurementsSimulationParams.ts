import { measurementType } from './Sensor';

export enum SIMULATION_TYPE {
    STATIC = 'STATIC',
    NUMERIC_RANDOM = 'NUMERIC_RANDOM',
    NUMERIC_INCREASE = 'NUMERIC_INCREASE', 
    NUMERIC_DECREASE = 'NUMERIC_DECREASE', 
    NUMERIC_INCREASE_DECREASE_RANDOM = 'NUMERIC_INCREASE_DECREASE_RANDOM', 
    ARRAY_OF_POSSIBLE_MEASUREMENTS_RANDOM = 'ARRAY_OF_POSSIBLE_MEASUREMENTS_RANDOM', 
}

interface SensorMeasurementsSimulationParams {
    id: string;
    mqttPublicationTopic: string;
    simulationType: SIMULATION_TYPE;
    startMeasurement: measurementType;
    decimalUnits?: number;
    measurementVariationFactor?: number;
    msBetweenPublications?: number;
    minMeasurement?: number;
    maxMeasurement?: number;
    possibleMeasurements?: string[]  | number[] | boolean[];
}

export interface NumericRandomSensorMeasurementsSimulationParams extends SensorMeasurementsSimulationParams {
    startMeasurement: number;
    minMeasurement: number;
    maxMeasurement: number;
}

export interface NumericIncreaseDecreaseSensorMeasurementsSimulationParams extends SensorMeasurementsSimulationParams {
    startMeasurement: number;
    measurementVariationFactor: number;
}

export interface ArrayOfPossibleMeasurementsSensorMeasurementsSimulationParams extends SensorMeasurementsSimulationParams {
    startMeasurement: measurementType;
    possibleMeasurements: string[]  | number[] | boolean[];
}

export default SensorMeasurementsSimulationParams;
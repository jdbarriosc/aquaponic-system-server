import { valueType } from './Measurement';

export enum SIMULATION_TYPE {
    STATIC = 'STATIC',
    NUMERIC_RANDOM = 'NUMERIC_RANDOM',
    NUMERIC_INCREASE = 'NUMERIC_INCREASE', 
    NUMERIC_DECREASE = 'NUMERIC_DECREASE', 
    NUMERIC_INCREASE_DECREASE_RANDOM = 'NUMERIC_INCREASE_DECREASE_RANDOM', 
    ARRAY_OF_POSIBLE_VALUES_RANDOM = 'ARRAY_OF_POSIBLE_VALUES_RANDOM', 
}

interface MQTTPublicationsSimulationProps {
    id: string;
    mqttPublicationTopic: string;
    simulationType: SIMULATION_TYPE;
    startValue: valueType;
    decimalUnits?: number;
    valueVariationFactor?: number;
    msBetweenPublications?: number;
    minValue?: number;
    maxValue?: number;
    possibleValues?: string[]  | number[] | boolean[];
}

export interface NumericRandomMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
    startValue: number;
    minValue: number;
    maxValue: number;
}

export interface NumericIncreaseDecreaseMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
    startValue: number;
    valueVariationFactor: number;
}

export interface ArrayOfPossibleValuesMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
    startValue: valueType;
    possibleValues: string[]  | number[] | boolean[];
}

export default MQTTPublicationsSimulationProps;
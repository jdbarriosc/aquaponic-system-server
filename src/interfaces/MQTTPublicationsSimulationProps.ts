import { valueType } from './Measurement';

export enum SimulationType {
    STATIC = 'STATIC',
    NUMERIC_RANDOM = 'NUMERIC_RANDOM',
    NUMERIC_INCREASE = 'NUMERIC_INCREASE', 
    NUMERIC_DECREASE = 'NUMERIC_DECREASE', 
    NUMERIC_INCREASE_DECREASE_RANDOM = 'NUMERIC_INCREASE_DECREASE_RANDOM', 
    ARRAY_OF_POSIBLE_VALUES_RANDOM = 'ARRAY_OF_POSIBLE_VALUES_RANDOM', 
}

interface MQTTPublicationsSimulationProps {
    mqttPublicationTopic: string;
    simulationType: SimulationType;
    startValue: valueType;
    decimalUnits?: number;
    valueVariationFactor?: number;
    msBetweenPublications?: number;
    minValue?: number;
    maxValue?: number;
    posibleValues?: string[]  | number[] | boolean[];
}

export default MQTTPublicationsSimulationProps;
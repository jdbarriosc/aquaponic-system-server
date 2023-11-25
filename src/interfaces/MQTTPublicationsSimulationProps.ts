export enum SimulationType {
    STATIC = 'STATIC',
    NUMERIC_RANDOM = 'NUMERIC_RANDOM',
    NUMERIC_INCREMENT = 'NUMERIC_INCREMENT', 
    NUMERIC_DECREASE = 'NUMERIC_DECREASE', 
    NUMERIC_INCREMENT_DECREASE_RANDOM = 'NUMERIC_INCREMENT_DECREASE_RANDOM', 
    ARRAY_OF_POSIBLE_VALUES_RANDOM = 'ARRAY_OF_POSIBLE_VALUES_RANDOM', 
}

interface MQTTPublicationsSimulationProps {
    topic: string;
    simulationType: SimulationType;
    startValue: string | number | boolean;
    msBetweenPublications?: number;
    valueVariationFactor?: number;
    minValue?: number;
    maxValue?: number;
    posibleValues?: string[]  | number[] | boolean[];
}

export default MQTTPublicationsSimulationProps;
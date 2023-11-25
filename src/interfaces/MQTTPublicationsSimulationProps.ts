export enum SimulationType {
    STATIC = 'STATIC',
    RANDOM = 'RANDOM',
    INCREMENT = 'INCREMENT', 
    DECREASE = 'DECREASE', 
    INCREMENT_DECREASE_RANDOM = 'INCREMENT_DECREASE_RANDOM', 
}

interface MQTTPublicationsSimulationProps {
    topic: string;
    simulationType: SimulationType;
    startValue: string | number | boolean;
    msBetweenPublications?: number;
    valueVariationFactor?: number;
    minValue?: number;
    maxValue?: number;
    posibleValues?: string[] | boolean[];
}

export default MQTTPublicationsSimulationProps;
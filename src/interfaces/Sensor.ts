export enum MeasurementClasification {
    INFO = 'INFO', 
    WARNING = 'WARNING',
    ERROR = 'ERROR', 
} 

interface MeasurementValueClasification {
    value: boolean | string;
    clasification: MeasurementClasification;
}

interface Sensor {
    id: string,
    name: string,
    path: string,
    measurement: string,
    unit?: string,
    minMeasurementValue?: number,
    maxMeasurementValue?: number,
    measurementValueClasifications?: MeasurementValueClasification[],
}

export default Sensor;
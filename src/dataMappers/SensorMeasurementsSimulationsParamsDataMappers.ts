import { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import SensorMeasurementsSimulationParams, {
    ArrayOfPossibleMeasurementsSensorMeasurementsSimulationParams,
    NumericIncreaseDecreaseSensorMeasurementsSimulationParams,
    NumericRandomSensorMeasurementsSimulationParams
} from '../interfaces/SensorMeasurementsSimulationParams';

function documentSnapshotToSensorMeasurementsSimulationParams(
    documentSnapshot: DocumentSnapshot,
): SensorMeasurementsSimulationParams {
    const sensorMeasurementsSimulationParams = documentSnapshot.data() as SensorMeasurementsSimulationParams;
    return sensorMeasurementsSimulationParams;
}

function querySnapshotToSensorMeasurementsSimulationsParams(
    querySnapshot: QuerySnapshot,
): SensorMeasurementsSimulationParams[] {
    const sensorMeasurementsSimulationsParams: SensorMeasurementsSimulationParams[] = [];
    querySnapshot.forEach((doc) => {
        const sensorMeasurementsSimulationParams = doc.data() as SensorMeasurementsSimulationParams;
        sensorMeasurementsSimulationsParams.push(sensorMeasurementsSimulationParams);
    });

    return sensorMeasurementsSimulationsParams;
}

function makeNumericRandomMQTTPublicationsSimulationProps(
    mqttPublicationsSimulationProps: SensorMeasurementsSimulationParams,
): NumericRandomSensorMeasurementsSimulationParams {
    const {
        startMeasurement,
        minMeasurement,
        maxMeasurement,
    } = mqttPublicationsSimulationProps;
    const startMeasurementWasProvided = typeof startMeasurement === 'number';
    const minMeasurementWasProvided = typeof minMeasurement === 'number';
    const maxMeasurementWasProvided = typeof maxMeasurement === 'number';

    if (!startMeasurementWasProvided) {
        throw new Error(`startMeasurement (${startMeasurement}) must be a number.`);
    }

    if (!minMeasurementWasProvided) {
        throw new Error(`minMeasurement (${minMeasurement}) must be a number.`);
    }

    if (!maxMeasurementWasProvided) {
        throw new Error(`maxMeasurement (${maxMeasurement}) must be a number.`);
    }

    if (startMeasurement < minMeasurement ) {
        throw new Error(`startMeasurement (${startMeasurement}) must be greter than minMeasurement (${minMeasurement}).`);
    }

    if (startMeasurement > maxMeasurement ) {
        throw new Error(`startMeasurement (${startMeasurement}) must be smaller than maxMeasurement (${maxMeasurement}).`);
    }

    if (minMeasurement > maxMeasurement ) {
        throw new Error(`minMeasurement (${minMeasurement}) must be equal or smaller than maxMeasurement (${maxMeasurement}).`);
    }

    const numericRandomMQTTPublicationsSimulationProps: NumericRandomSensorMeasurementsSimulationParams = {
        ...mqttPublicationsSimulationProps,
        startMeasurement,
        minMeasurement,
        maxMeasurement,
    };

    return numericRandomMQTTPublicationsSimulationProps;
}

function makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps(
    mqttPublicationsSimulationProps: SensorMeasurementsSimulationParams,
): NumericIncreaseDecreaseSensorMeasurementsSimulationParams {
    const {
        startMeasurement,
        measurementVariationFactor,
        minMeasurement,
        maxMeasurement,
      } = mqttPublicationsSimulationProps;
      const startMeasurementWasProvided = typeof startMeasurement === 'number';
      const minMeasurementWasProvided = typeof minMeasurement === 'number';
      const maxMeasurementWasProvided = typeof maxMeasurement === 'number';
        
      if (!startMeasurementWasProvided) {
        throw new Error(`startMeasurement (${startMeasurement}) must be a number.`);
      }
    
      if (minMeasurementWasProvided && startMeasurement < minMeasurement ) {
        throw new Error(`startMeasurement (${startMeasurement}) must be greter than minMeasurement (${minMeasurement}).`);
      }
    
      if (maxMeasurementWasProvided && startMeasurement > maxMeasurement ) {
        throw new Error(`startMeasurement (${startMeasurement}) must be smaller than maxMeasurement (${maxMeasurement}).`);
      }
    
      if (minMeasurementWasProvided && maxMeasurementWasProvided && minMeasurement > maxMeasurement ) {
        throw new Error(`minMeasurement (${minMeasurement}) must be equal or smaller than maxMeasurement (${maxMeasurement}).`);
      }
    
      if (!measurementVariationFactor) {
        throw new Error(`measurementVariationFactor must be provided.`);
      }
    
      const numericIncreaseDecreaseMQTTPublicationsSimulationProps: NumericIncreaseDecreaseSensorMeasurementsSimulationParams = {
        ...mqttPublicationsSimulationProps,
        startMeasurement,
        measurementVariationFactor,
      };
    
      return numericIncreaseDecreaseMQTTPublicationsSimulationProps;
}

function makeArrayOfPossibleMeasurementsMQTTPublicationsSimulationProps(
    mqttPublicationsSimulationProps: SensorMeasurementsSimulationParams,
): ArrayOfPossibleMeasurementsSensorMeasurementsSimulationParams {
    const { possibleMeasurements } = mqttPublicationsSimulationProps;
  
    if (!possibleMeasurements) {
      throw new Error(`possibleMeasurements must be defined.`);
    }
  
    const arrayOfPossibleMeasurementsSensorMeasurementsSimulationParams: ArrayOfPossibleMeasurementsSensorMeasurementsSimulationParams = {
      ...mqttPublicationsSimulationProps,
      possibleMeasurements,
    };

    return arrayOfPossibleMeasurementsSensorMeasurementsSimulationParams;
}

export {
    documentSnapshotToSensorMeasurementsSimulationParams,
    querySnapshotToSensorMeasurementsSimulationsParams,
    makeNumericRandomMQTTPublicationsSimulationProps,
    makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps,
    makeArrayOfPossibleMeasurementsMQTTPublicationsSimulationProps,
};
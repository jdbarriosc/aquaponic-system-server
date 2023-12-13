import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import SensorMeasurementsSimulationParams from '../interfaces/SensorMeasurementsSimulationParams';
import { getFirestoreDBCollectionDocuments } from '../providers/FirebaseProvider';
import { querySnapshotToSensorMeasurementsSimulationsParams } from '../dataMappers/SensorMeasurementsSimulationsParamsDataMappers';

class SensorMeasurementsSimulationsParamsService {
  public static async getSensorMeasurementsSimulationsParams(): Promise<SensorMeasurementsSimulationParams[]> {
    const sensorMeasurementsSimulationsParams = await getFirestoreDBCollectionDocuments<SensorMeasurementsSimulationParams>(
      FirestoreDBCollectionNames.SensorMeasurementsSimulationsParams,
      querySnapshotToSensorMeasurementsSimulationsParams,
    );

    return sensorMeasurementsSimulationsParams;
  }
}

export default SensorMeasurementsSimulationsParamsService;

import Sensor from '../interfaces/Sensor';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { querySnapshotToSensors } from '../dataMappers/SensorsDataMappers';
import { getFirestoreDBCollectionDocuments } from '../providers/FirebaseProvider';

class SensorsService {
  public static async getSensors(): Promise<Sensor[]> {
    const sensors = await getFirestoreDBCollectionDocuments<Sensor>(
      FirestoreDBCollectionNames.Sensors,
      querySnapshotToSensors,
    );

    return sensors;
  }
}

export default SensorsService;

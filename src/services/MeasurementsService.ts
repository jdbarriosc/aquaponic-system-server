import Measurement from '../interfaces/Measurement';
import { getFirestoreDBCollectionDocuments } from '../providers/FirebaseConnectionProvider';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { querySnapshotToMeasurement } from '../dataMappers/MeasurementsDataMappers';

class MeasurementsService {
  public static async getMeasurements(): Promise<Measurement[]> {
    const measurements = await getFirestoreDBCollectionDocuments<Measurement>(
      FirestoreDBCollectionNames.Measurements,
      querySnapshotToMeasurement,
    );

    return measurements;
  }
}

export default MeasurementsService;

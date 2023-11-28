import Measurement from '../interfaces/Measurement';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { querySnapshotToMeasurement } from '../dataMappers/MeasurementsDataMappers';
import { getFirestoreDBCollectionDocuments } from '../providers/FirebaseConnectionProvider';

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

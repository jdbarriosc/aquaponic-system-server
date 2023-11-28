import Measurement from '../interfaces/Measurement';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { querySnapshotToMeasurements } from '../dataMappers/MeasurementsDataMappers';
import { getFirestoreDBCollectionDocuments } from '../providers/FirebaseConnectionProvider';

class MeasurementsService {
  public static async getMeasurements(): Promise<Measurement[]> {
    const measurements = await getFirestoreDBCollectionDocuments<Measurement>(
      FirestoreDBCollectionNames.Measurements,
      querySnapshotToMeasurements,
    );

    return measurements;
  }
}

export default MeasurementsService;

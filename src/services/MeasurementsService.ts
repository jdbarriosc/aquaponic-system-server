import { collection, query, getDocs, getFirestore, CollectionReference } from 'firebase/firestore';
import Measurement from '../interfaces/Measurement';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { querySnapshotToMeasurement } from '../dataMappers/MeasurementsDataMappers';

class MeasurementsService {
  public static async getMeasurements(): Promise<Measurement[]> {
    const measurementsCollection = MeasurementsService.getMeasurementsCollection();
    const measurementsQuery = query(measurementsCollection);
    const measurementsQuerySnapshot = await getDocs(measurementsQuery);
    const measurements = querySnapshotToMeasurement(measurementsQuerySnapshot);

    return measurements;
  }

  private static getMeasurementsCollection(): CollectionReference {
    const firestoreDB = getFirestore();
    const measurementsCollection = collection(firestoreDB, FirestoreDBCollectionNames.Measurements);

    return measurementsCollection;
  }
}

export default MeasurementsService;

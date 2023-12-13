import { doc, getFirestore, setDoc } from 'firebase/firestore';
import sensorDocuments from './documents/sensorDocuments';
import FirestoreDBCollectionNames from '../src/constants/FirestoreDBCollectionNames';
import { initializeFirebaseConnection } from '../src/providers/FirebaseProvider';
import sensorMeasurementsSimulationParamsDocuments from './documents/sensorMeasurementsSimulationParamsDocuments';

async function script(): Promise<void> {
  console.log('-- poblating firestore db');

  initializeFirebaseConnection();
  const firestoreDB = getFirestore();

  sensorDocuments.forEach(async (sensorDocument) => {
    const { id } = sensorDocument;
    const documentReference = doc(firestoreDB, FirestoreDBCollectionNames.Sensors, id);

    await setDoc(documentReference, sensorDocument);
  });

  sensorMeasurementsSimulationParamsDocuments.forEach(async (sensorMeasurementsSimulationParamsDocument) => {
    const { id } = sensorMeasurementsSimulationParamsDocument;
    const documentReference = doc(
      firestoreDB,
      FirestoreDBCollectionNames.SensorMeasurementsSimulationsParams,
      id,
    );

    await setDoc(documentReference, sensorMeasurementsSimulationParamsDocument);
  });

  console.log('-- done poblating firestore db');
}    


export default script;

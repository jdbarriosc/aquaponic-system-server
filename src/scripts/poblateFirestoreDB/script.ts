import { v4 as uuidv4 } from 'uuid';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { initializeFirebaseConnection } from '../../providers/FirebaseProvider';
import measurementDocuments from './documents/measurementDocuments';
import FirestoreDBCollectionNames from '../../constants/FirestoreDBCollectionNames';
import mqttPublicationsSimulationsPropsDocuments from './documents/mqttPublicationsSimulationsPropsDocuments';

async function script(): Promise<void> {
  console.log('-- poblating firestore db');

  initializeFirebaseConnection();
  const firestoreDB = getFirestore();

  measurementDocuments.forEach(async (measurementDocument) => {
    const { id } = measurementDocument;
    const documentReference = doc(firestoreDB, FirestoreDBCollectionNames.Measurements, id);

    await setDoc(documentReference, measurementDocument);
  });

  mqttPublicationsSimulationsPropsDocuments.forEach(async (mqttPublicationsSimulationsPropsDocument) => {
    const { id } = mqttPublicationsSimulationsPropsDocument;
    const documentReference = doc(
      firestoreDB,
      FirestoreDBCollectionNames.MQTTPublicationsSimulationsProps,
      id,
    );

    await setDoc(documentReference, mqttPublicationsSimulationsPropsDocument);
  });

  console.log('-- done poblating firestore db');
}    


export default script;

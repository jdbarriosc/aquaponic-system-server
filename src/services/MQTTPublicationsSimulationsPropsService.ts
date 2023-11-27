import { collection, query, getDocs, getFirestore, CollectionReference } from 'firebase/firestore';
import MQTTPublicationsSimulationProps from '../interfaces/MQTTPublicationsSimulationProps';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { querySnapshotToMQTTPublicationsSimulationsProps } from '../dataMappers/MQTTPublicationsSimulationsPropsDataMappers';

class MQTTPublicationsSimulationsPropsService {
  public static async getMQTTPublicationsSimulationsProps(): Promise<MQTTPublicationsSimulationProps[]> {
    const mqttPublicationsSimulationsPropsCollection = MQTTPublicationsSimulationsPropsService.getMQTTPublicationsSimulationsPropsCollection();
    const mqttPublicationsSimulationsPropsQuery = query(mqttPublicationsSimulationsPropsCollection);
    const mqttPublicationsSimulationsPropsQuerySnapshot = await getDocs(mqttPublicationsSimulationsPropsQuery);
    const mqttPublicationsSimulationsProps = querySnapshotToMQTTPublicationsSimulationsProps(mqttPublicationsSimulationsPropsQuerySnapshot);

    return mqttPublicationsSimulationsProps;
  }

  private static getMQTTPublicationsSimulationsPropsCollection(): CollectionReference {
    const firestoreDB = getFirestore();
    const mqttPublicationsSimulationsPropsCollection = collection(firestoreDB, FirestoreDBCollectionNames.MQTTPublicationsSimulationsProps);

    return mqttPublicationsSimulationsPropsCollection;
  }
}

export default MQTTPublicationsSimulationsPropsService;

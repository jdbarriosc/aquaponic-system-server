import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import MQTTPublicationsSimulationProps from '../interfaces/MQTTPublicationsSimulationProps';
import { getFirestoreDBCollectionDocuments } from '../providers/FirebaseProvider';
import { querySnapshotToMQTTPublicationsSimulationsProps } from '../dataMappers/MQTTPublicationsSimulationsPropsDataMappers';

class MQTTPublicationsSimulationsPropsService {
  public static async getMQTTPublicationsSimulationsProps(): Promise<MQTTPublicationsSimulationProps[]> {
    const mqttPublicationsSimulationsProps = await getFirestoreDBCollectionDocuments<MQTTPublicationsSimulationProps>(
      FirestoreDBCollectionNames.MQTTPublicationsSimulationsProps,
      querySnapshotToMQTTPublicationsSimulationsProps,
    );

    return mqttPublicationsSimulationsProps;
  }
}

export default MQTTPublicationsSimulationsPropsService;

import { collection, query, getDocs, getFirestore, DocumentData, SnapshotOptions, QueryDocumentSnapshot } from "firebase/firestore";
import simulateStaticMQTTPublications from './mqttPublicationSimulators/simulateStaticMQTTPublications';
import simulateNumericRandomMQTTPublications from './mqttPublicationSimulators/simulateNumericRandomMQTTPublications';
import simulateNumericIncreaseMQTTPublications from './mqttPublicationSimulators/simulateNumericIncreaseMQTTPublications';
import simulateNumericDecreaseMQTTPublications from './mqttPublicationSimulators/simulateNumericDecreaseMQTTPublications';
import simulateArrayOfPosibleValuesRandomMQTTPublications from './mqttPublicationSimulators/simulateArrayOfPosibleValuesRandomMQTTPublications';
import MQTTPublicationsSimulationProps, { SimulationType } from '../../interfaces/MQTTPublicationsSimulationProps';
import simulateNumericIncreaseDecreaseRandomMQTTPublications from './mqttPublicationSimulators/simulateNumericIncreaseDecreaseRandomMQTTPublications';
import { initializeMQTTClient } from '../../providers/MQTTClientConnectionProvider';
import { initializeFirebaseConnection } from '../../providers/FirebaseConnectionProvider';

async function script(): Promise<void> {
  console.log('-- simulate MQTT publications');

  initializeFirebaseConnection();
  await initializeMQTTClient();

  const firestoreDB = getFirestore();
  const mqttPublicationsSimulationsPropsCollection = collection(firestoreDB, "mqttPublicationsSimulationsProps");
  const mqttPublicationsSimulationsPropsQuery = query(mqttPublicationsSimulationsPropsCollection);
  const mqttPublicationsSimulationsPropsQuerySnapshot = await getDocs(mqttPublicationsSimulationsPropsQuery);

  const mqttPublicationsSimulationsProps: MQTTPublicationsSimulationProps[] = [];
  mqttPublicationsSimulationsPropsQuerySnapshot.forEach((doc) => {
    const mqttPublicationsSimulationProps = doc.data() as MQTTPublicationsSimulationProps;
    mqttPublicationsSimulationsProps.push(mqttPublicationsSimulationProps);
  });

  mqttPublicationsSimulationsProps.forEach(
    async (mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps) => {
      const { simulationType } = mqttPublicationsSimulationProps;

      switch (simulationType) {
        case SimulationType.STATIC:
          simulateStaticMQTTPublications(mqttPublicationsSimulationProps);
          break;

        case SimulationType.NUMERIC_RANDOM:
          simulateNumericRandomMQTTPublications(mqttPublicationsSimulationProps);
          break;

        case SimulationType.NUMERIC_INCREASE:
          simulateNumericIncreaseMQTTPublications(mqttPublicationsSimulationProps);
          break;

        case SimulationType.NUMERIC_DECREASE:
          simulateNumericDecreaseMQTTPublications(mqttPublicationsSimulationProps);
          break;

        case SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM:
          simulateNumericIncreaseDecreaseRandomMQTTPublications(mqttPublicationsSimulationProps);
          break;

        case SimulationType.ARRAY_OF_POSIBLE_VALUES_RANDOM:
          simulateArrayOfPosibleValuesRandomMQTTPublications(mqttPublicationsSimulationProps);
          break;

        default:
          break;
      }
    }
  );
}    


export default script;

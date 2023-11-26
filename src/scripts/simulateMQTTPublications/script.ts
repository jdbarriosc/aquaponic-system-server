import { connect } from 'mqtt';
import simulateStaticMQTTPublications from './mqttPublicationSimulators/simulateStaticMQTTPublications';
import mqttPublicationsSimulationsProps from '../../mocks/mqttPublicationsSimulationsProps';
import simulateNumericRandomMQTTPublications from './mqttPublicationSimulators/simulateNumericRandomMQTTPublications';
import simulateNumericIncreaseMQTTPublications from './mqttPublicationSimulators/simulateNumericIncreaseMQTTPublications';
import simulateNumericDecreaseMQTTPublications from './mqttPublicationSimulators/simulateNumericDecreaseMQTTPublications';
import simulateArrayOfPosibleValuesRandomMQTTPublications from './mqttPublicationSimulators/simulateArrayOfPosibleValuesRandomMQTTPublications';
import MQTTPublicationsSimulationProps, { SimulationType } from '../../interfaces/MQTTPublicationsSimulationProps';
import simulateNumericIncreaseDecreaseRandomMQTTPublications from './mqttPublicationSimulators/simulateNumericIncreaseDecreaseRandomMQTTPublications';

async function script(): Promise<void> {
  console.log('-- mock sensors data');
  
  const mqttClient = connect("mqtt://test.mosquitto.org");

  mqttPublicationsSimulationsProps.forEach(async (mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps) => {
    const { simulationType } = mqttPublicationsSimulationProps;

    switch (simulationType) {
      case SimulationType.STATIC:
        simulateStaticMQTTPublications(mqttClient, mqttPublicationsSimulationProps);
        break;

      case SimulationType.NUMERIC_RANDOM:
        simulateNumericRandomMQTTPublications(mqttClient, mqttPublicationsSimulationProps);
        break;

      case SimulationType.NUMERIC_INCREASE:
        simulateNumericIncreaseMQTTPublications(mqttClient, mqttPublicationsSimulationProps);
        break;

      case SimulationType.NUMERIC_DECREASE:
        simulateNumericDecreaseMQTTPublications(mqttClient, mqttPublicationsSimulationProps);
        break;

      case SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM:
        simulateNumericIncreaseDecreaseRandomMQTTPublications(mqttClient, mqttPublicationsSimulationProps);
        break;

      case SimulationType.ARRAY_OF_POSIBLE_VALUES_RANDOM:
        simulateArrayOfPosibleValuesRandomMQTTPublications(mqttClient, mqttPublicationsSimulationProps);
        break;

      default:
        break;
    }
  });
}    


export default script;

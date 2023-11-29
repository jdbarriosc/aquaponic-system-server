import fetch from 'node-fetch';
import { initializeMQTTPublicationClient } from '../../providers/MQTTPublicationProvider';
import simulateStaticMQTTPublications from './mqttPublicationSimulators/simulateStaticMQTTPublications';
import simulateNumericRandomMQTTPublications from './mqttPublicationSimulators/simulateNumericRandomMQTTPublications';
import simulateNumericIncreaseMQTTPublications from './mqttPublicationSimulators/simulateNumericIncreaseMQTTPublications';
import simulateNumericDecreaseMQTTPublications from './mqttPublicationSimulators/simulateNumericDecreaseMQTTPublications';
import simulateArrayOfPosibleValuesRandomMQTTPublications from './mqttPublicationSimulators/simulateArrayOfPosibleValuesRandomMQTTPublications';
import MQTTPublicationsSimulationProps, { SimulationType } from '../../interfaces/MQTTPublicationsSimulationProps';
import simulateNumericIncreaseDecreaseRandomMQTTPublications from './mqttPublicationSimulators/simulateNumericIncreaseDecreaseRandomMQTTPublications';

async function script(): Promise<void> {
  console.log('-- simulating MQTT publications');

  await initializeMQTTPublicationClient();
  
  const response = await fetch('http://localhost:2999/mqtt-publications-simulations-props');
  const mqttPublicationsSimulationsProps = await response.json() as MQTTPublicationsSimulationProps[];

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
      };
    },
  );
}

export default script;

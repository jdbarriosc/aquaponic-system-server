import { connect } from 'mqtt';
import simulateIncreaseDecreaseRandomMQTTPublications from './mqttPublicationSimulators/simulateIncreaseDecreaseRandomMQTTPublications';
import { fishTankWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps } from '../../mocks/mqttPublicationsSimulationsProps';

async function script(): Promise<void> {
  console.log('-- Mock sensors data');
  const mqttClient = connect("mqtt://test.mosquitto.org");
  // measurements.forEach((measurement: Measurement) => {
  //   const { aliasPath, simulationProps } = measurement;

  //   if (simulationProps) {

  //   }
  // });

  const MQTTPublicationsSimulationProps = fishTankWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps;
  simulateIncreaseDecreaseRandomMQTTPublications(mqttClient, MQTTPublicationsSimulationProps);
}    


export default script;

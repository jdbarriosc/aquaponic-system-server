import { connect } from 'mqtt';
import increaseDecreaseRandomSimulation from './sensorDataMockers/increaseDecreaseRandomSimulation';
import { fishTankWaterTemperatureSensorTemperatureMQTTPublicationSimulationProps } from '../../mocks/mqttPublicationSimulationsProps';

async function script(): Promise<void> {
  console.log('-- Mock sensors data');
  const mqttClient = connect("mqtt://test.mosquitto.org");
  // measurements.forEach((measurement: Measurement) => {
  //   const { aliasPath, simulationProps } = measurement;

  //   if (simulationProps) {

  //   }
  // });

  const mqttPublicationSimulationProps = fishTankWaterTemperatureSensorTemperatureMQTTPublicationSimulationProps;
  increaseDecreaseRandomSimulation(mqttClient, mqttPublicationSimulationProps);
}    


export default script;

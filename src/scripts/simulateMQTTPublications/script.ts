import { connect } from 'mqtt';
import simulateNumericIncreaseDecreaseRandomMQTTPublications from './mqttPublicationSimulators/simulateNumericIncreaseDecreaseRandomMQTTPublications';
import { fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps, fishTankWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps } from '../../mocks/mqttPublicationsSimulationsProps';
import simulateArrayOfPosibleValuesRandomMQTTPublications from './mqttPublicationSimulators/simulateArrayOfPosibleValuesRandomMQTTPublications';

async function script(): Promise<void> {
  console.log('-- Mock sensors data');
  const mqttClient = connect("mqtt://test.mosquitto.org");
  // measurements.forEach((measurement: Measurement) => {
  //   const { aliasPath, simulationProps } = measurement;

  //   if (simulationProps) {

  //   }
  // });

  const MQTTPublicationsSimulationProps = fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps;
  simulateArrayOfPosibleValuesRandomMQTTPublications(mqttClient, MQTTPublicationsSimulationProps);
}    


export default script;

import mockFishTankWaterLevelSensorData from './sensorDataMockers/mockFishTankWaterLevelSensorData';
import mockFishTankTemperatureSensorData from './sensorDataMockers/mockFishTankTemperatureSensorData';
import { connect } from 'mqtt';

async function script(): Promise<void> {
  console.log('-- Mock sensors data');
  const mqttClient = connect("mqtt://test.mosquitto.org");


  mockFishTankWaterLevelSensorData(mqttClient);
  mockFishTankTemperatureSensorData(mqttClient);
}    


export default script;

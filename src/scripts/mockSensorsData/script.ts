import mockFishTankWaterLevelSensorData from './sensorDataMockers/mockFishTankWaterLevelSensorData';
import mockFishTankTemperatureSensorData from './sensorDataMockers/mockFishTankTemperatureSensorData';

async function script(): Promise<void> {
  console.log('-- Mock sensors data');

  mockFishTankWaterLevelSensorData();
  mockFishTankTemperatureSensorData();
}    


export default script;

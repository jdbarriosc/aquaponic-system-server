import sleep from '../../../helpers/sleep';
import { MqttClient } from 'mqtt';

async function mockFishTankWaterLevelSensorData(mqttClient: MqttClient): Promise<void> {
  console.log('-- Mock fish tank water level sensor data');

  while (true) {
      const hasNeededWaterLevel = true;
      console.log(`hasNeededWaterLevel: ${hasNeededWaterLevel}`);
      await sleep(2000);
    }     
}    


export default mockFishTankWaterLevelSensorData;

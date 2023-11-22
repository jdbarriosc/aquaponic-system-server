import sleep from '../../../helpers/sleep';
import makeRandomNumber from '../../../helpers/makeRandomNumber';
import { MqttClient } from 'mqtt';


async function mockFishTankTemperatureSensorData(mqttClient: MqttClient): Promise<void> {
  console.log('-- Mock fish tank temperature sensor data');

  const min = 22;
  const max = 32;
  const decimalUnits = 1;
  while (true) {
      const temperature = makeRandomNumber(min, max, decimalUnits);
      console.log(`temperature: ${temperature}`);
      mqttClient.publish("/AquaponicSystem/FishTankTemperatureSensor/temperature", temperature.toString());
      await sleep(2000);
    }     
}    


export default mockFishTankTemperatureSensorData;

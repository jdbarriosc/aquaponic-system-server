import sleep from '../../../helpers/sleep';
import makeRandomNumber from '../../../helpers/makeRandomNumber';


async function mockFishTankTemperatureSensorData(): Promise<void> {
  console.log('-- Mock fish tank temperature sensor data');

  const min = 22;
  const max = 32;
  const decimalUnits = 1;
  while (true) {
      const temperature = makeRandomNumber(min, max, decimalUnits);
      console.log(`temperature: ${temperature}`);
      await sleep(2000);
    }     
}    


export default mockFishTankTemperatureSensorData;

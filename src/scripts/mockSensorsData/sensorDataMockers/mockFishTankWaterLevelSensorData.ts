import sleep from '../../../helpers/sleep';


async function mockFishTankWaterLevelSensorData(): Promise<void> {
  console.log('-- Mock fish tank water level sensor data');

  while (true) {
      const hasNeededWaterLevel = true;
      console.log(`hasNeededWaterLevel: ${hasNeededWaterLevel}`);
      await sleep(2000);
    }     
}    


export default mockFishTankWaterLevelSensorData;

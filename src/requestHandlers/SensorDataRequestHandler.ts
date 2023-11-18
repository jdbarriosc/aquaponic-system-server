import { Context } from 'koa';
import { IoTSiteWiseClient, BatchPutAssetPropertyValueCommand, BatchPutAssetPropertyValueRequest } from "@aws-sdk/client-iotsitewise";

class SensorDataRequestHandler {
  public static async postSensorData(ctx: Context): Promise<void> {
    const client = new IoTSiteWiseClient();
    const timeInSeconds = Math.round(new Date().getTime() / 1000);
    const entryId = timeInSeconds.toString();
    const propertyAlias = '/AquaponicSystem/FishTankTemperatureSensor/temperature';
    const temperature = 17.2;
    const quality = 'GOOD';

    const input: BatchPutAssetPropertyValueRequest = {
      entries: [
        { 
          entryId,
          propertyAlias,
          propertyValues: [
            { 
              value: { 
                doubleValue: temperature,
              },
              timestamp: {
                timeInSeconds,
              },
              quality,
            },
          ],
        },
      ],
    };
    const command = new BatchPutAssetPropertyValueCommand(input);
    // TODO check errorEntries
    const response = await client.send(command);

    ctx.body = 'post sensor data';
    ctx.status = 200;
  }    
}

export default SensorDataRequestHandler;

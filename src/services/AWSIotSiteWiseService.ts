import { v4 as uuidv4 } from 'uuid';
import AWSIotSiteWiseAssetPropertyValueVariant from '../constants/AWSIotSiteWiseAssetPropertyValueVariant';
import { IoTSiteWiseClient, BatchPutAssetPropertyValueCommand, BatchPutAssetPropertyValueRequest } from "@aws-sdk/client-iotsitewise";

class AWSIotSiteWiseService {
  public static async postAssetPropertyValueEntry(
    propertyAlias: string,
    valueVariant: AWSIotSiteWiseAssetPropertyValueVariant,
    value: string | number | boolean
  ): Promise<void> {
    // TODO export to provider
    const client = new IoTSiteWiseClient();

    const entryId = uuidv4();;
    const timeInSeconds = Math.round(new Date().getTime() / 1000);

    const body: BatchPutAssetPropertyValueRequest = {
      entries: [
        { 
          entryId,
          propertyAlias,
          propertyValues: [
            { 
              value: { 
                [valueVariant]: value,
              },
              timestamp: {
                timeInSeconds,
              },
              quality: 'GOOD',
            },
          ],
        },
      ],
    };
    
    const command = new BatchPutAssetPropertyValueCommand(body);
    
    // TODO check errorEntries
    const response = await client.send(command);
  }    
}

export default AWSIotSiteWiseService;

import { v4 as uuidv4 } from 'uuid';
import AWSIotSiteWiseAssetPropertyValueVariant from '../constants/AWSIotSiteWiseAssetValueVariant';
import { IoTSiteWiseClient, BatchPutAssetPropertyValueCommand, BatchPutAssetPropertyValueRequest, PutAssetPropertyValueEntry } from '@aws-sdk/client-iotsitewise';

class AWSIotSiteWiseService {
  public static async postAssetValueEntries(
    entries: PutAssetPropertyValueEntry[],
  ): Promise<void> {
    // TODO export to provider
    const client = new IoTSiteWiseClient();

    const body: BatchPutAssetPropertyValueRequest = {
      entries,
    };
    
    const command = new BatchPutAssetPropertyValueCommand(body);
    
    // TODO check errorEntries
    const response = await client.send(command);
  }    
}

export default AWSIotSiteWiseService;

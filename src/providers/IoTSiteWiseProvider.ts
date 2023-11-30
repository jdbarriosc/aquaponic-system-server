import {
  IoTSiteWiseClient,
  BatchPutAssetPropertyValueCommand,
  BatchPutAssetPropertyValueRequest,
  PutAssetPropertyValueEntry,
} from '@aws-sdk/client-iotsitewise';

let iotSiteWiseClient: IoTSiteWiseClient | null = null;

async function initializIoTSiteWiseClient(): Promise<void> {
  if (!iotSiteWiseClient) {
    iotSiteWiseClient = new IoTSiteWiseClient();
  }
}

async function postIoTSiteWiseAssetValueEntries(
  entries: PutAssetPropertyValueEntry[],
): Promise<void> {
  if (!iotSiteWiseClient) {
    throw new Error('The IotSiteWiseClient client has not been initialized yet.');
  }

  const body: BatchPutAssetPropertyValueRequest = {
    entries,
  };
  const command = new BatchPutAssetPropertyValueCommand(body);
  
  await iotSiteWiseClient.send(command);
}

export {
  initializIoTSiteWiseClient,
  postIoTSiteWiseAssetValueEntries,
};
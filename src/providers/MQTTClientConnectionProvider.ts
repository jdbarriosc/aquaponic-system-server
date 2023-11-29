import { MqttClient, connectAsync } from 'mqtt';
import Asset from '../factories/Asset';
import MQTTPublication from '../interfaces/MQTTPublication';
import MeasurementsService from '../services/MeasurementsService';

let mqttClient: MqttClient | undefined;

function checkInitializeMQTTClientEnvVariables(): void {
  if (!process.env.MQTT_PUBLICATION_BROKER_URL) {
    throw new Error('MQTT_PUBLICATION_BROKER_URL must be set in env variables for connection to be initialized.');
  }
}

async function initializeMQTTClient(): Promise<void> {
  if (!mqttClient) {
    checkInitializeMQTTClientEnvVariables();
    mqttClient = await connectAsync(process.env.MQTT_PUBLICATION_BROKER_URL!);
  }
}

function getMQTTClient(): MqttClient {
  if (!mqttClient) {
    throw new Error('The mqtt client has not been initialized yet.');
  }

  return mqttClient;
}

function mqttPublicate(mqttPublication: MQTTPublication): void {
  if (!mqttClient) {
    throw new Error('The mqtt client has not been initialized yet.');
  }

  const { topic, message } = mqttPublication;
  mqttClient.publish(topic, message);
}

async function subscribeMQTTClientToMeasurementPaths() {
  if (!mqttClient) {
    throw new Error('The mqtt client has not been initialized yet.');
  }

  const measurements = await MeasurementsService.getMeasurements();

  measurements.forEach(
    async (measurement) => {
      const asset = new Asset(measurement);
      asset.subscribeToFirestoreMeasurement();
      await asset.initializeMQTTSubscriptionClient();
    },
  );
}

function closeMQTTClient(): void {
  if (mqttClient) {
    mqttClient.end();
    mqttClient = undefined;
  }
}

export {
  initializeMQTTClient,
  getMQTTClient,
  mqttPublicate,
  closeMQTTClient,
  subscribeMQTTClientToMeasurementPaths,
};
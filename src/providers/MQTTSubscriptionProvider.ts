import { MqttClient, connectAsync } from 'mqtt';
import Asset from '../factories/Asset';
import Measurement from '../interfaces/Measurement';
import MeasurementsService from '../services/MeasurementsService';

interface MQTTSubsctiptionTopicsOnMessage {
  [key: string]: (message: string) => Promise<void> | undefined;
}

let mqttSubscriptionClient: MqttClient | null = null;

function checkInitializeMQTTSubscriptionClientEnvVariables(): void {
  if (!process.env.MQTT_BROKER_URL) {
    throw new Error('MQTT_BROKER_URL must be set in env variables for subscription client to be initialized.');
  }
}

async function initializeMQTTSubscriptionClient(): Promise<void> {
  if (!mqttSubscriptionClient) {
    checkInitializeMQTTSubscriptionClientEnvVariables();
    mqttSubscriptionClient = await connectAsync(process.env.MQTT_BROKER_URL!);
  }
}

async function subscribeMQTTClientToMeasurementPaths() {
  if (!mqttSubscriptionClient) {
    throw new Error('The mqtt subscription client has not been initialized yet.');
  }

  const measurements = await MeasurementsService.getMeasurements();
  const mqttSubsctiptionTopicsOnMessage: MQTTSubsctiptionTopicsOnMessage = {};

  measurements.forEach((measurement: Measurement) => {
    const { mqttSubscriptionTopic } = measurement;
    console.log(mqttSubscriptionTopic);

    mqttSubscriptionClient!.subscribe(mqttSubscriptionTopic);

    const asset = new Asset(measurement);
    asset.subscribeToFirestoreMeasurement();

    const onMessage = (message: string) => asset.handleMQTTSubscriptionTopicMessage(message);
    mqttSubsctiptionTopicsOnMessage[mqttSubscriptionTopic] = onMessage;
  });

  const onMessage = (topic: string, message: string) => {
    if (mqttSubsctiptionTopicsOnMessage[topic]) {
      const mqttSubsctiptionTopicOnMessage = mqttSubsctiptionTopicsOnMessage[topic];
      mqttSubsctiptionTopicOnMessage(message);
    }
  };

  mqttSubscriptionClient.on('message', (topic, message) => {
    const parsedMessage = message.toString();
    onMessage(topic, parsedMessage);
  });
}

function closeMQTTClient(): void {
  if (mqttSubscriptionClient) {
    mqttSubscriptionClient.end();
    mqttSubscriptionClient = null;
  }
}

export {
  initializeMQTTSubscriptionClient,
  subscribeMQTTClientToMeasurementPaths,
  closeMQTTClient,
};
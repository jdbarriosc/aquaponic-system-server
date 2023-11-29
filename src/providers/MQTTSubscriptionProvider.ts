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

async function subscribeToMQTTTopic(mqttSubscriptionTopic: string) {
  if (!mqttSubscriptionClient) {
    throw new Error('The mqtt subscription client has not been initialized yet.');
  }

  mqttSubscriptionClient.subscribe(mqttSubscriptionTopic);
}

async function setMQTTOnMessage(
  onMessage: (topic: string, message: string) => void,
) {
  if (!mqttSubscriptionClient) {
    throw new Error('The mqtt subscription client has not been initialized yet.');
  }

  mqttSubscriptionClient.on('message', (topic, message) => {
    const parsedMessage = message.toString();
    onMessage(topic, parsedMessage);
  });
}

async function subscribeMQTTClientToMeasurementPaths() {
  const measurements = await MeasurementsService.getMeasurements();
  const mqttSubsctiptionTopicsOnMessage: MQTTSubsctiptionTopicsOnMessage = {};

  measurements.forEach((measurement: Measurement) => {
    const { mqttSubscriptionTopic } = measurement;
    subscribeToMQTTTopic(mqttSubscriptionTopic);

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

  setMQTTOnMessage(onMessage);
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
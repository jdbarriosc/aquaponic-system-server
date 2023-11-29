import { MqttClient, connectAsync } from 'mqtt';
import Asset from '../factories/Asset';
import MQTTPublication from '../interfaces/MQTTPublication';
import MeasurementsService from '../services/MeasurementsService';
import sequentialAsyncForEach from '../utils/sequentialAsyncForEach';
import Measurement from '../interfaces/Measurement';
import sleep from '../utils/sleep';
import MQTTSubscriptionClient from '../factories/MQTTSubscriptionClient';

interface MQTTSubsctiptionTopicsOnMessage {
  [key: string]: (message: string) => Promise<void> | undefined;
}

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
  const mqttSubsctiptionTopicsOnMessage: MQTTSubsctiptionTopicsOnMessage = {};

  measurements.forEach((measurement: Measurement) => {
    const { mqttSubscriptionTopic } = measurement;
    console.log(mqttSubscriptionTopic);

    mqttClient!.subscribe(mqttSubscriptionTopic);

    const asset = new Asset(measurement);
    asset.subscribeToFirestoreMeasurement();

    const onMessage = (message: string) => asset.handleMQTTSubscriptionTopicMessage(message);
    mqttSubsctiptionTopicsOnMessage[mqttSubscriptionTopic] = onMessage;
  });

  const onMessage = (topic: string, message: string) => {
    console.log(`switch received: ('${topic}', ${message})`);
    if (mqttSubsctiptionTopicsOnMessage[topic]) {
      const mqttSubsctiptionTopicOnMessage = mqttSubsctiptionTopicsOnMessage[topic];
      mqttSubsctiptionTopicOnMessage(message);
    }
  };

  mqttClient.on('message', (topic, message) => {
    const parsedMessage = message.toString();
    onMessage(topic, parsedMessage);
  });
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
import { MqttClient, connectAsync } from 'mqtt';
import MeasurementsService from '../services/MeasurementsService';

let mqttClient: MqttClient | undefined;

function checkInitializeMQTTClientEnvVariables(): void {
  if (!process.env.MQTT_BROKER_URL) {
    throw new Error('MQTT_BROKER_URL must be set in env variables for connection to be initialized.');
  }
}

async function initializeMQTTClient(): Promise<void> {
  if (!mqttClient) {
    checkInitializeMQTTClientEnvVariables();
    mqttClient = await connectAsync(process.env.MQTT_BROKER_URL!);
  }
}

function subscribeMQTTClientToTopic(topic: string, onMessage: (message: string) => {}) {
  if (!mqttClient) {
    throw new Error('The mqtt client has not been initialized yet.');
  }

  const measurements = MeasurementsService.getMeasurements();
  
  mqttClient.subscribe(topic);

  mqttClient.on('message', (topic, message) => {
      const parsedMessage = message.toString();
      onMessage(parsedMessage);

  });
}

async function subscribeMQTTClientToMeasurementPaths() {
  if (!mqttClient) {
    throw new Error('The mqtt client has not been initialized yet.');
  }

  const measurements = await MeasurementsService.getMeasurements();

  const messageActionParams = [];

  measurements.forEach((measurement) => {
    const { mqttSubscriptionTopic } = measurement;
    mqttClient!.subscribe(mqttSubscriptionTopic);
  });
  
  mqttClient.on('message', (topic, message) => {
      const parsedMessage = message.toString();
      measurements.forEach((measurement) => {
        const { mqttSubscriptionTopic } = measurement;
        mqttClient!.subscribe(mqttSubscriptionTopic);
      });
  });
}

function getMQTTClient(): MqttClient {
  if (!mqttClient) {
    throw new Error('The mqtt client has not been initialized yet.');
  }

  return mqttClient;
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
  closeMQTTClient,
};

// mqttClient.subscribe('/AquaponicSystem/FishTankTemperatureSensor/temperature');
    
// mqttClient.on('message', (topic, message) => {
//     console.log(topic, message.toString(), typeof message);
// });
import { MqttClient, connectAsync } from 'mqtt';

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

function closeMQTTClient(): void {
  if (mqttSubscriptionClient) {
    mqttSubscriptionClient.end();
    mqttSubscriptionClient = null;
  }
}

export {
  initializeMQTTSubscriptionClient,
  subscribeToMQTTTopic,
  setMQTTOnMessage,
  closeMQTTClient,
};
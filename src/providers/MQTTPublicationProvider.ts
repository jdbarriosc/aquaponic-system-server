import { MqttClient, connectAsync } from 'mqtt';
import MQTTPublication from '../interfaces/MQTTPublication';

let mqttPublicationClient: MqttClient | null = null;

function checkInitializeMQTTPublicationClientEnvVariables(): void {
  if (!process.env.MQTT_BROKER_URL) {
    throw new Error('MQTT_BROKER_URL must be set in env variables for publication client to be initialized.');
  }
}

async function initializeMQTTPublicationClient(): Promise<void> {
  if (!mqttPublicationClient) {
    checkInitializeMQTTPublicationClientEnvVariables();
    mqttPublicationClient = await connectAsync(process.env.MQTT_BROKER_URL!);
  }
}

function mqttPublicate(mqttPublication: MQTTPublication): void {
  if (!mqttPublicationClient) {
    throw new Error('The mqtt publication client has not been initialized yet.');
  }

  const { topic, message } = mqttPublication;
  mqttPublicationClient.publish(topic, message);
}

function closeMQTTPublicationClient(): void {
  if (mqttPublicationClient) {
    mqttPublicationClient.end();
    mqttPublicationClient = null;
  }
}

export {
  initializeMQTTPublicationClient,
  mqttPublicate,
  closeMQTTPublicationClient,
};
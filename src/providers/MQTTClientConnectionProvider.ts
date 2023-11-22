import { MqttClient, connectAsync } from "mqtt";

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

// mqttClient.subscribe("/AquaponicSystem/FishTankTemperatureSensor/temperature");
    
// mqttClient.on("message", (topic, message) => {
//     console.log(topic, message.toString(), typeof message);
// });
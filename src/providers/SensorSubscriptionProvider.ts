import Sensor from '../interfaces/Sensor';
import SensorsService from '../services/SensorsService';
import SensorSubscription from '../subscriptionsHandlers/SensorSubscription';
import { setMQTTOnMessage, subscribeToMQTTTopic } from './MQTTSubscriptionProvider';

interface MQTTSubsctiptionTopicsOnMessage {
    [key: string]: (message: string) => Promise<void> | undefined;
}

async function initializeSensorSubscriptions(): Promise<void> {
  const mqttSubsctiptionTopicsOnMessage: MQTTSubsctiptionTopicsOnMessage = {};
  
  const sensors = await SensorsService.getSensors();
  sensors.forEach((sensor: Sensor) => {
    const { mqttSubscriptionTopic } = sensor;
    subscribeToMQTTTopic(mqttSubscriptionTopic);

    const asset = new SensorSubscription(sensor);
    asset.subscribeToFirestoreSensor();

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

export {
  initializeSensorSubscriptions,
};
  
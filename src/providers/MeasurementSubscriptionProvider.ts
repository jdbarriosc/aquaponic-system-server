import Measurement from '../interfaces/Measurement';
import MeasurementsService from '../services/MeasurementsService';
import MeasurementSubscription from '../subscriptionsHandlers/MeasurementSubscription';
import { setMQTTOnMessage, subscribeToMQTTTopic } from './MQTTSubscriptionProvider';

interface MQTTSubsctiptionTopicsOnMessage {
    [key: string]: (message: string) => Promise<void> | undefined;
}

async function initializeMeasurementSubscriptions(): Promise<void> {
  const mqttSubsctiptionTopicsOnMessage: MQTTSubsctiptionTopicsOnMessage = {};
  
  const measurements = await MeasurementsService.getMeasurements();
  measurements.forEach((measurement: Measurement) => {
    const { mqttSubscriptionTopic } = measurement;
    subscribeToMQTTTopic(mqttSubscriptionTopic);

    const asset = new MeasurementSubscription(measurement);
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

export {
  initializeMeasurementSubscriptions,
};
  
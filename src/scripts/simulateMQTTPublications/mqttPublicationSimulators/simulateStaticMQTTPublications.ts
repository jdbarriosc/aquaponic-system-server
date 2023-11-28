import sleep from '../../../utils/sleep';
import { getMQTTClient } from '../../../providers/MQTTClientConnectionProvider';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';


async function simulateStaticMQTTPublications(
  MQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): Promise<void> {
  const mqttClient = getMQTTClient(); 
  const defaultMsBetweenPublications = 2000;
  const { 
    mqttPublicationTopic: topic,
    startValue, 
    msBetweenPublications = defaultMsBetweenPublications,
  } = MQTTPublicationsSimulationProps;

  console.log(`-- simulate static ${topic} publications`);

  while (true) {
    mqttClient.publish(topic, startValue.toString());
    console.log(`published: ('${topic}', ${startValue})`);

    await sleep(msBetweenPublications);
  }     
}    


export default simulateStaticMQTTPublications;

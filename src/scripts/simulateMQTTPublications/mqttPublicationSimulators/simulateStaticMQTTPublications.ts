import sleep from '../../../utils/sleep';
import MQTTPublication from '../../../interfaces/MQTTPublication';
import { mqttPublicate } from '../../../providers/MQTTClientConnectionProvider';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';

async function simulateStaticMQTTPublications(
  MQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): Promise<void> {
  const defaultMsBetweenPublications = 2000;
  const { 
    mqttPublicationTopic: topic,
    startValue, 
    msBetweenPublications = defaultMsBetweenPublications,
  } = MQTTPublicationsSimulationProps;

  console.log(`-- simulate static ${topic} publications`);

  while (true) {
    const mqttPublication: MQTTPublication = {
      topic,
      message: startValue.toString(),
    }
    
    mqttPublicate(mqttPublication);

    console.log(`published: ('${mqttPublication.topic}', ${mqttPublication.message})`);

    await sleep(msBetweenPublications);
  }     
}    


export default simulateStaticMQTTPublications;

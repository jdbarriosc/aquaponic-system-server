import sleep from '../../../utils/sleep';
import MQTTPublication from '../../../interfaces/MQTTPublication';
import { mqttPublicate } from '../../../providers/MQTTClientConnectionProvider';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';

async function simulateStaticMQTTPublications(
  mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): Promise<void> {
  const defaultMsBetweenPublications = 2000;
  const { 
    mqttPublicationTopic,
    startValue, 
    msBetweenPublications = defaultMsBetweenPublications,
  } = mqttPublicationsSimulationProps;

  console.log(`-- simulate static ${mqttPublicationTopic} publications`);

  while (true) {
    const mqttPublication: MQTTPublication = {
      topic: mqttPublicationTopic,
      message: startValue.toString(),
    }
    
    mqttPublicate(mqttPublication);

    console.log(`published: ('${mqttPublication.topic}', ${mqttPublication.message})`);

    await sleep(msBetweenPublications);
  }     
}    


export default simulateStaticMQTTPublications;

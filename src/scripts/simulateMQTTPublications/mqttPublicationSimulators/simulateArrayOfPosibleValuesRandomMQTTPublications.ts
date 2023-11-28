import sleep from '../../../utils/sleep';
import { getMQTTClient } from '../../../providers/MQTTClientConnectionProvider';
import { makeRandomNumber } from '../../../factories/NumberFactory';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';

interface CheckedMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
  startValue: string | number | boolean;
  posibleValues: string[]  | number[] | boolean[];
}

function checkMQTTPublicationsSimulationProps(simulationProps: MQTTPublicationsSimulationProps): CheckedMQTTPublicationsSimulationProps {
  const { mqttPublicationTopic: topic, posibleValues } = simulationProps;

  const errorPrefix = `Error in ${topic}\n`;

  if (!posibleValues) {
    throw new Error(`${errorPrefix}posibleValues must be defined.`);
  }

  const checkedMQTTPublicationsSimulationProps: CheckedMQTTPublicationsSimulationProps = {
    ...simulationProps,
    posibleValues,
  };

  return checkedMQTTPublicationsSimulationProps;
}

function calculateNextValue(
  posibleValues: string[]  | number[] | boolean[],
){
  const randomIndex = makeRandomNumber(0, posibleValues.length - 1);
  const nextValue = posibleValues[randomIndex];

  return nextValue;
} 

async function simulateArrayOfPosibleValuesRandomMQTTPublications(
  MQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): Promise<void> {
  const mqttClient = getMQTTClient(); 
  const defaultMsBetweenPublications = 2000;
  const checkedMQTTPublicationsSimulationProps = checkMQTTPublicationsSimulationProps(MQTTPublicationsSimulationProps);
  const { 
    mqttPublicationTopic: topic,
    startValue,
    posibleValues,  
    msBetweenPublications = defaultMsBetweenPublications,
  } = checkedMQTTPublicationsSimulationProps;

  console.log(`-- simulate random ${topic} publications`);

  let currentValue = startValue;
  while (true) {
    mqttClient.publish(topic, currentValue.toString());
    console.log(`published: ('${topic}', ${currentValue})`);

    currentValue = calculateNextValue(posibleValues);

    await sleep(msBetweenPublications);
  }     
}    


export default simulateArrayOfPosibleValuesRandomMQTTPublications;

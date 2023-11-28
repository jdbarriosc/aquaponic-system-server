import sleep from '../../../utils/sleep';
import { getMQTTClient } from '../../../providers/MQTTClientConnectionProvider';
import { makeRandomNumber } from '../../../factories/NumberFactory';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';

interface CheckedMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
  startValue: number;
  minValue: number;
  maxValue: number;
}

function checkMQTTPublicationsSimulationProps(simulationProps: MQTTPublicationsSimulationProps): CheckedMQTTPublicationsSimulationProps {
  const { topic, startValue, minValue, maxValue } = simulationProps;
  const startValueWasProvided = typeof startValue === 'number';
  const minValueWasProvided = typeof minValue === 'number';
  const maxValueWasProvided = typeof maxValue === 'number';

  const errorPrefix = `Error in ${topic}\n`;

  if (!startValueWasProvided) {
    throw new Error(`${errorPrefix}startValue (${startValue}) must be a number.`);
  }

  if (!minValueWasProvided) {
    throw new Error(`${errorPrefix}minValue (${minValue}) must be a number.`);
  }

  if (!maxValueWasProvided) {
    throw new Error(`${errorPrefix}maxValue (${maxValue}) must be a number.`);
  }

  if (startValue < minValue ) {
    throw new Error(`${errorPrefix}startValue (${startValue}) must be greter than minValue (${minValue}).`);
  }

  if (startValue > maxValue ) {
    throw new Error(`${errorPrefix}startValue (${startValue}) must be smaller than maxValue (${maxValue}).`);
  }

  if (minValue > maxValue ) {
    throw new Error(`${errorPrefix}minValue (${minValue}) must be equal or smaller than maxValue (${maxValue}).`);
  }

  const checkedMQTTPublicationsSimulationProps: CheckedMQTTPublicationsSimulationProps = {
    ...simulationProps,
    startValue,
    minValue,
    maxValue,
  };

  return checkedMQTTPublicationsSimulationProps;
}

function calculateNextValue(
  minValue: number,
  maxValue: number,
){
  const nextValue = makeRandomNumber(minValue, maxValue);
  return nextValue;
} 

async function simulateNumericRandomMQTTPublications(
  MQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): Promise<void> {
  const mqttClient = getMQTTClient(); 
  const defaultMsBetweenPublications = 2000;
  const checkedMQTTPublicationsSimulationProps = checkMQTTPublicationsSimulationProps(MQTTPublicationsSimulationProps);
  const { 
    topic,
    startValue, 
    minValue, 
    maxValue, 
    msBetweenPublications = defaultMsBetweenPublications,
  } = checkedMQTTPublicationsSimulationProps;

  console.log(`-- simulate random ${topic} publications`);

  let currentValue = startValue;
  while (true) {
    mqttClient.publish(topic, currentValue.toString());
    console.log(`published: ('${topic}', ${currentValue})`);

    currentValue = calculateNextValue(minValue, maxValue);

    await sleep(msBetweenPublications);
  }     
}    


export default simulateNumericRandomMQTTPublications;

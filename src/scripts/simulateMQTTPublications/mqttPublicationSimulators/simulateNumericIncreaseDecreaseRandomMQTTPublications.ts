import sleep from '../../../utils/sleep';
import { getMQTTClient } from '../../../providers/MQTTClientConnectionProvider';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';
import { makeNumberRandomPositiveOrNegative } from '../../../factories/NumberFactory';

interface CheckedMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
  startValue: number;
  valueVariationFactor: number;
}

function checkMQTTPublicationsSimulationProps(simulationProps: MQTTPublicationsSimulationProps): CheckedMQTTPublicationsSimulationProps {
  const { mqttPublicationTopic: topic, startValue, valueVariationFactor, minValue, maxValue } = simulationProps;
  const startValueWasProvided = typeof startValue === 'number';
  const minValueWasProvided = typeof minValue === 'number';
  const maxValueWasProvided = typeof maxValue === 'number';

  const errorPrefix = `Error in ${topic}\n`;

  if (!startValueWasProvided) {
    throw new Error(`${errorPrefix}startValue (${startValue}) must be a number.`);
  }

  if (minValueWasProvided && startValue < minValue ) {
    throw new Error(`${errorPrefix}startValue (${startValue}) must be greter than minValue (${minValue}).`);
  }

  if (maxValueWasProvided && startValue > maxValue ) {
    throw new Error(`${errorPrefix}startValue (${startValue}) must be smaller than maxValue (${maxValue}).`);
  }

  if (minValueWasProvided && maxValueWasProvided && minValue > maxValue ) {
    throw new Error(`${errorPrefix}minValue (${minValue}) must be equal or smaller than maxValue (${maxValue}).`);
  }

  if (!valueVariationFactor) {
    throw new Error(`${errorPrefix}valueVariationFactor must be provided.`);
  }

  const checkedMQTTPublicationsSimulationProps: CheckedMQTTPublicationsSimulationProps = {
    ...simulationProps,
    startValue,
    valueVariationFactor,
  };

  return checkedMQTTPublicationsSimulationProps;
}

function calculateNextValue(
  currentValue: number,
  valueVariationFactor: number,
  minValue?: number,
  maxValue?: number,
){
  const minValueWasProvided = typeof minValue === 'number';
  const maxValueWasProvided = typeof maxValue === 'number';

  const randomizedValue = currentValue + makeNumberRandomPositiveOrNegative(valueVariationFactor);
  const decreasedValue = currentValue - valueVariationFactor;
  const increasedValue = currentValue + valueVariationFactor;

  const valueCanBeDecreased = !minValueWasProvided ||  decreasedValue >= minValue;
  const valueCanBeIncreased = !maxValueWasProvided || increasedValue <= maxValue;

  let nextValue = currentValue;
  if (valueCanBeDecreased && valueCanBeIncreased) {
    nextValue = randomizedValue;
  } else if (valueCanBeDecreased)  {
    nextValue = decreasedValue;
  } else if (valueCanBeIncreased)  {
    nextValue = increasedValue;
  }

  return nextValue;
} 

async function simulateNumericIncreaseDecreaseRandomMQTTPublications(
  MQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): Promise<void> {
  const mqttClient = getMQTTClient(); 
  const defaultMsBetweenPublications = 2000;
  const checkedMQTTPublicationsSimulationProps = checkMQTTPublicationsSimulationProps(MQTTPublicationsSimulationProps);
  const { 
    mqttPublicationTopic: topic,
    startValue, 
    valueVariationFactor,
    minValue, 
    maxValue, 
    msBetweenPublications = defaultMsBetweenPublications,
  } = checkedMQTTPublicationsSimulationProps;

  console.log(`-- simulate increase decrease random ${topic} publications`);

  let currentValue = startValue;
  while (true) {
    mqttClient.publish(topic, currentValue.toString());
    console.log(`published: ('${topic}', ${currentValue})`);

    currentValue = calculateNextValue(currentValue, valueVariationFactor, minValue, maxValue);

    await sleep(msBetweenPublications);
  }     
}    


export default simulateNumericIncreaseDecreaseRandomMQTTPublications;

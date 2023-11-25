import sleep from '../../../helpers/sleep';
import { makeRandomPositiveOrNegative } from '../../../helpers/Random';
import { MqttClient } from 'mqtt';
import MQTTPublicationSimulationProps from '../../../interfaces/MQTTPublicationSimulationProps';

interface CheckedSimulationProps extends MQTTPublicationSimulationProps {
  startValue: number;
  valueVariationFactor: number;
}

function checkProps(simulationProps: MQTTPublicationSimulationProps): CheckedSimulationProps {
  const { topic, startValue, valueVariationFactor, minValue, maxValue } = simulationProps;
  const minValueWasProvided = typeof minValue === 'number';
  const maxValueWasProvided = typeof maxValue === 'number';

  const errorPrefix = `Error in ${topic}\n`;

  if (typeof startValue !== 'number') {
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

  const checkedSimulationProps: CheckedSimulationProps = {
    ...simulationProps,
    startValue,
    valueVariationFactor,
  };

  return checkedSimulationProps;
}

function calculateNextValue(
  currentValue: number,
  valueVariationFactor: number,
  minValue?: number,
  maxValue?: number,
){
  const minValueWasProvided = typeof minValue === 'number';
  const maxValueWasProvided = typeof maxValue === 'number';

  const randomizedValue = currentValue + makeRandomPositiveOrNegative(valueVariationFactor);
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

async function increaseDecreaseRandomSimulation(
  mqttClient: MqttClient,
  mqttPublicationSimulationProps: MQTTPublicationSimulationProps,
): Promise<void> {
  const defaultMsBetweenPublications = 2000;
  const checkedMQTTPublicationSimulationProps = checkProps(mqttPublicationSimulationProps);
  const { 
    topic,
    startValue, 
    valueVariationFactor,
    minValue, 
    maxValue, 
    msBetweenPublications = defaultMsBetweenPublications,
  } = checkedMQTTPublicationSimulationProps;

  console.log(`-- Simulate ${topic} publications`);


  let currentValue = startValue;
  while (true) {
    mqttClient.publish(topic, currentValue.toString());
    console.log(`published: ('${topic}', ${currentValue})`);

    currentValue = calculateNextValue(currentValue, valueVariationFactor, minValue, maxValue);

    await sleep(msBetweenPublications);
  }     
}    


export default increaseDecreaseRandomSimulation;

import sleep from '../../../utils/sleep';
import MQTTPublication from '../../../interfaces/MQTTPublication';
import { mqttPublicate } from '../../../providers/MQTTPublicationProvider';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';
import { makeNumberRandomPositiveOrNegative, roundNumber } from '../../../factories/NumberFactory';

interface CheckedMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
  startValue: number;
  valueVariationFactor: number;
}

function checkMQTTPublicationsSimulationProps(
  simulationProps: MQTTPublicationsSimulationProps,
): CheckedMQTTPublicationsSimulationProps {
  const {
    mqttPublicationTopic,
    startValue,
    valueVariationFactor,
    minValue,
    maxValue,
  } = simulationProps;
  const startValueWasProvided = typeof startValue === 'number';
  const minValueWasProvided = typeof minValue === 'number';
  const maxValueWasProvided = typeof maxValue === 'number';

  const errorPrefix = `Error in ${mqttPublicationTopic}\n`;

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
  decimalUnits: number,
  valueVariationFactor: number,
  minValue?: number,
  maxValue?: number,
){
  const minValueWasProvided = typeof minValue === 'number';
  const maxValueWasProvided = typeof maxValue === 'number';

  const randomizedValueVariationFactor = makeNumberRandomPositiveOrNegative(valueVariationFactor);
  const randomizedValue = currentValue + randomizedValueVariationFactor;
  const roundedRandomizedValue = roundNumber(randomizedValue, decimalUnits);

  const decreasedValue = currentValue - valueVariationFactor;
  const roundedDecreasedValue = roundNumber(decreasedValue, decimalUnits);

  const increasedValue = currentValue + valueVariationFactor;
  const roundedIncreasedValue = roundNumber(increasedValue, decimalUnits);

  const valueCanBeDecreased = !minValueWasProvided ||  roundedDecreasedValue >= minValue;
  const valueCanBeIncreased = !maxValueWasProvided || roundedIncreasedValue <= maxValue;

  let nextValue = currentValue;
  if (valueCanBeDecreased && valueCanBeIncreased) {
    nextValue = roundedRandomizedValue;
  } else if (valueCanBeDecreased)  {
    nextValue = roundedDecreasedValue;
  } else if (valueCanBeIncreased)  {
    nextValue = roundedIncreasedValue;
  }

  return nextValue;
} 

async function simulateNumericIncreaseDecreaseRandomMQTTPublications(
  mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): Promise<void> {
  const defaultDecimalUnits = 2;
  const defaultMsBetweenPublications = 2000;
  const checkedMQTTPublicationsSimulationProps = checkMQTTPublicationsSimulationProps(
    mqttPublicationsSimulationProps,
  );
  const { 
    mqttPublicationTopic,
    startValue, 
    valueVariationFactor,
    minValue, 
    maxValue, 
    decimalUnits = defaultDecimalUnits,
    msBetweenPublications = defaultMsBetweenPublications,
  } = checkedMQTTPublicationsSimulationProps;

  console.log(`-- simulate increase decrease random ${mqttPublicationTopic} publications`);

  let currentValue = startValue;
  while (true) {
    const mqttPublication: MQTTPublication = {
      topic: mqttPublicationTopic,
      message: currentValue.toString(),
    }
    
    mqttPublicate(mqttPublication);

    console.log(`published: ('${mqttPublication.topic}', ${mqttPublication.message})`);

    currentValue = calculateNextValue(
      currentValue,
      decimalUnits,
      valueVariationFactor,
      minValue,
      maxValue,
    );

    await sleep(msBetweenPublications);
  }     
}    


export default simulateNumericIncreaseDecreaseRandomMQTTPublications;

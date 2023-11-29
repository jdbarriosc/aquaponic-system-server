import sleep from '../../../utils/sleep';
import MQTTPublication from '../../../interfaces/MQTTPublication';
import { mqttPublicate } from '../../../providers/MQTTPublicationProvider';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';
import { roundNumber } from '../../../factories/NumberFactory';

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
  maxValue?: number,
){
  const maxValueWasProvided = typeof maxValue === 'number';
  const increasedValue = currentValue + valueVariationFactor;
  const roundedIncreasedValue = roundNumber(increasedValue, decimalUnits);
  const valueCanBeIncreased = !maxValueWasProvided || roundedIncreasedValue <= maxValue;

  let nextValue = currentValue;
  if (valueCanBeIncreased)  {
    nextValue = roundedIncreasedValue;
  }

  return nextValue;
} 

async function simulateNumericIncreaseMQTTPublications(
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
    maxValue,
    decimalUnits = defaultDecimalUnits,
    msBetweenPublications = defaultMsBetweenPublications,
  } = checkedMQTTPublicationsSimulationProps;

  console.log(`-- simulate increase ${mqttPublicationTopic} publications`);

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
      maxValue,
    );

    await sleep(msBetweenPublications);
  }     
}    


export default simulateNumericIncreaseMQTTPublications;

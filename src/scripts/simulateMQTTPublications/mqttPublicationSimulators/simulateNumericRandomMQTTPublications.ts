import sleep from '../../../utils/sleep';
import MQTTPublication from '../../../interfaces/MQTTPublication';
import { mqttPublicate } from '../../../providers/MQTTClientConnectionProvider';
import { makeRandomNumber } from '../../../factories/NumberFactory';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';

interface CheckedMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
  startValue: number;
  minValue: number;
  maxValue: number;
}

function checkMQTTPublicationsSimulationProps(
  simulationProps: MQTTPublicationsSimulationProps,
): CheckedMQTTPublicationsSimulationProps {
  const {
    mqttPublicationTopic,
    startValue,
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
  decimalUnits: number,
){
  const nextValue = makeRandomNumber(minValue, maxValue, decimalUnits);
  return nextValue;
} 

async function simulateNumericRandomMQTTPublications(
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
    minValue,
    maxValue,
    decimalUnits = defaultDecimalUnits,
    msBetweenPublications = defaultMsBetweenPublications,
  } = checkedMQTTPublicationsSimulationProps;

  console.log(`-- simulate random ${mqttPublicationTopic} publications`);

  let currentValue = startValue;
  while (true) {
    const mqttPublication: MQTTPublication = {
      topic: mqttPublicationTopic,
      message: currentValue.toString(),
    }
    
    mqttPublicate(mqttPublication);

    console.log(`published: ('${mqttPublication.topic}', ${mqttPublication.message})`);

    currentValue = calculateNextValue(minValue, maxValue, decimalUnits);

    await sleep(msBetweenPublications);
  }     
}    


export default simulateNumericRandomMQTTPublications;

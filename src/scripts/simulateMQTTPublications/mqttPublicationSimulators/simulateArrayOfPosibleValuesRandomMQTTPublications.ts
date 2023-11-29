import sleep from '../../../utils/sleep';
import { valueType } from '../../../interfaces/Measurement';
import MQTTPublication from '../../../interfaces/MQTTPublication';
import { mqttPublicate } from '../../../providers/MQTTPublicationProvider';
import { makeRandomNumber } from '../../../factories/NumberFactory';
import MQTTPublicationsSimulationProps from '../../../interfaces/MQTTPublicationsSimulationProps';

interface CheckedMQTTPublicationsSimulationProps extends MQTTPublicationsSimulationProps {
  startValue: valueType;
  posibleValues: string[]  | number[] | boolean[];
}

function checkMQTTPublicationsSimulationProps(
  simulationProps: MQTTPublicationsSimulationProps,
): CheckedMQTTPublicationsSimulationProps {
  const { mqttPublicationTopic, posibleValues } = simulationProps;

  const errorPrefix = `Error in ${mqttPublicationTopic}\n`;

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
  mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): Promise<void> {
  const defaultMsBetweenPublications = 2000;
  const checkedMQTTPublicationsSimulationProps = checkMQTTPublicationsSimulationProps(
    mqttPublicationsSimulationProps,
  );
  const { 
    mqttPublicationTopic,
    startValue,
    posibleValues,  
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

    currentValue = calculateNextValue(posibleValues);

    await sleep(msBetweenPublications);
  }     
}    


export default simulateArrayOfPosibleValuesRandomMQTTPublications;

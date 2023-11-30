import { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import MQTTPublicationsSimulationProps, {
    ArrayOfPosibleValuesMQTTPublicationsSimulationProps,
    NumericIncreaseDecreaseMQTTPublicationsSimulationProps,
    NumericRandomMQTTPublicationsSimulationProps
} from '../interfaces/MQTTPublicationsSimulationProps';

function documentSnapshotToMQTTPublicationsSimulationProps(
    documentSnapshot: DocumentSnapshot,
): MQTTPublicationsSimulationProps {
    const mqttPublicationsSimulationProps = documentSnapshot.data() as MQTTPublicationsSimulationProps;
    return mqttPublicationsSimulationProps;
}

function querySnapshotToMQTTPublicationsSimulationsProps(
    querySnapshot: QuerySnapshot,
): MQTTPublicationsSimulationProps[] {
    const mqttPublicationsSimulationsProps: MQTTPublicationsSimulationProps[] = [];
    querySnapshot.forEach((doc) => {
        const mqttPublicationsSimulationProps = doc.data() as MQTTPublicationsSimulationProps;
        mqttPublicationsSimulationsProps.push(mqttPublicationsSimulationProps);
    });

    return mqttPublicationsSimulationsProps;
}

function makeNumericRandomMQTTPublicationsSimulationProps(
    mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): NumericRandomMQTTPublicationsSimulationProps {
    const {
        startValue,
        minValue,
        maxValue,
    } = mqttPublicationsSimulationProps;
    const startValueWasProvided = typeof startValue === 'number';
    const minValueWasProvided = typeof minValue === 'number';
    const maxValueWasProvided = typeof maxValue === 'number';

    if (!startValueWasProvided) {
        throw new Error(`startValue (${startValue}) must be a number.`);
    }

    if (!minValueWasProvided) {
        throw new Error(`minValue (${minValue}) must be a number.`);
    }

    if (!maxValueWasProvided) {
        throw new Error(`maxValue (${maxValue}) must be a number.`);
    }

    if (startValue < minValue ) {
        throw new Error(`startValue (${startValue}) must be greter than minValue (${minValue}).`);
    }

    if (startValue > maxValue ) {
        throw new Error(`startValue (${startValue}) must be smaller than maxValue (${maxValue}).`);
    }

    if (minValue > maxValue ) {
        throw new Error(`minValue (${minValue}) must be equal or smaller than maxValue (${maxValue}).`);
    }

    const numericRandomMQTTPublicationsSimulationProps: NumericRandomMQTTPublicationsSimulationProps = {
        ...mqttPublicationsSimulationProps,
        startValue,
        minValue,
        maxValue,
    };

    return numericRandomMQTTPublicationsSimulationProps;
}

function makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps(
    mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): NumericIncreaseDecreaseMQTTPublicationsSimulationProps {
    const {
        startValue,
        valueVariationFactor,
        minValue,
        maxValue,
      } = mqttPublicationsSimulationProps;
      const startValueWasProvided = typeof startValue === 'number';
      const minValueWasProvided = typeof minValue === 'number';
      const maxValueWasProvided = typeof maxValue === 'number';
        
      if (!startValueWasProvided) {
        throw new Error(`startValue (${startValue}) must be a number.`);
      }
    
      if (minValueWasProvided && startValue < minValue ) {
        throw new Error(`startValue (${startValue}) must be greter than minValue (${minValue}).`);
      }
    
      if (maxValueWasProvided && startValue > maxValue ) {
        throw new Error(`startValue (${startValue}) must be smaller than maxValue (${maxValue}).`);
      }
    
      if (minValueWasProvided && maxValueWasProvided && minValue > maxValue ) {
        throw new Error(`minValue (${minValue}) must be equal or smaller than maxValue (${maxValue}).`);
      }
    
      if (!valueVariationFactor) {
        throw new Error(`valueVariationFactor must be provided.`);
      }
    
      const numericIncreaseDecreaseMQTTPublicationsSimulationProps: NumericIncreaseDecreaseMQTTPublicationsSimulationProps = {
        ...mqttPublicationsSimulationProps,
        startValue,
        valueVariationFactor,
      };
    
      return numericIncreaseDecreaseMQTTPublicationsSimulationProps;
}

function makeArrayOfPosibleValuesMQTTPublicationsSimulationProps(
    mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps,
): ArrayOfPosibleValuesMQTTPublicationsSimulationProps {
    const { posibleValues } = mqttPublicationsSimulationProps;
  
    if (!posibleValues) {
      throw new Error(`posibleValues must be defined.`);
    }
  
    const arrayOfPosibleValuesMQTTPublicationsSimulationProps: ArrayOfPosibleValuesMQTTPublicationsSimulationProps = {
      ...mqttPublicationsSimulationProps,
      posibleValues,
    };

    return arrayOfPosibleValuesMQTTPublicationsSimulationProps;
}

export {
    documentSnapshotToMQTTPublicationsSimulationProps,
    querySnapshotToMQTTPublicationsSimulationsProps,
    makeNumericRandomMQTTPublicationsSimulationProps,
    makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps,
    makeArrayOfPosibleValuesMQTTPublicationsSimulationProps,
};
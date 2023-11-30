import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import sleep from '../utils/sleep';
import { valueType } from '../interfaces/Measurement';
import MQTTPublication from '../interfaces/MQTTPublication';
import { mqttPublicate } from '../providers/MQTTPublicationProvider';
import { subscribeToFirestoreDocument } from '../providers/FirebaseProvider';
import { makeNumberRandomPositiveOrNegative, makeRandomNumber, roundNumber } from '../factories/NumberFactory';
import MQTTPublicationsSimulationProps, { ArrayOfPosibleValuesMQTTPublicationsSimulationProps, NumericIncreaseDecreaseMQTTPublicationsSimulationProps, NumericRandomMQTTPublicationsSimulationProps, SimulationType } from '../interfaces/MQTTPublicationsSimulationProps';
import { documentSnapshotToMQTTPublicationsSimulationProps, makeArrayOfPosibleValuesMQTTPublicationsSimulationProps, makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps, makeNumericRandomMQTTPublicationsSimulationProps } from '../dataMappers/MQTTPublicationsSimulationsPropsDataMappers';

const defaultDecimalUnits = 2;

class MQTTPublicationsSimulationPropsSubscription {
    private defaultMsBetweenPublications = 2000;

    private startValue: valueType;
    private currentValue: valueType;
    private mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps;
    private getNextValue: ((currentValue: valueType) => valueType) | null = null;

    public constructor(mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps) {
        const { startValue } = mqttPublicationsSimulationProps;
        this.startValue = startValue;
        this.currentValue = startValue;
        this.mqttPublicationsSimulationProps = mqttPublicationsSimulationProps;
        this.setMQTTPublicationsSimulationProps(mqttPublicationsSimulationProps);
    }

    public async subscribeToFirestoreMQTTPublicationsSimulationProps(): Promise<void> {
        const { id } = this.mqttPublicationsSimulationProps;
        const onMQTTPublicationsSimulationPropsChange = (
            mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps,
        ) => {
            const { startValue } = mqttPublicationsSimulationProps;
            if (this.startValue !== startValue) {
                this.startValue = startValue;
                this.currentValue = startValue;
            }

            this.mqttPublicationsSimulationProps = mqttPublicationsSimulationProps;
            this.setMQTTPublicationsSimulationProps(mqttPublicationsSimulationProps);
        };

        subscribeToFirestoreDocument<MQTTPublicationsSimulationProps>(
            FirestoreDBCollectionNames.MQTTPublicationsSimulationsProps,
            id,
            documentSnapshotToMQTTPublicationsSimulationProps,
            onMQTTPublicationsSimulationPropsChange,
        );
    }
    
    private setMQTTPublicationsSimulationProps(mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps) {        
        let getNextValue: ((currentValue: valueType) => valueType) | null  = null;

        const { simulationType } = mqttPublicationsSimulationProps;
        switch (simulationType) {
            case SimulationType.STATIC:
                getNextValue = null;
                break;
      
            case SimulationType.NUMERIC_RANDOM:
                const numericRandomMQTTPublicationsSimulationProps = makeNumericRandomMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = () => MQTTPublicationsSimulationPropsSubscription.getNextValueNumericRandom(
                    numericRandomMQTTPublicationsSimulationProps,
                );

                break;
    
            case SimulationType.NUMERIC_INCREASE:
                const numericIncreaseDecreaseMQTTPublicationsSimulationProps = makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = (currentValue: valueType) => {
                    if (typeof currentValue !== 'number') {
                        throw new Error ('currentValue must be a number');
                    }
                    const nextValue = MQTTPublicationsSimulationPropsSubscription.getNextValueNumericIncrease(
                        currentValue,
                        numericIncreaseDecreaseMQTTPublicationsSimulationProps,
                    );

                    return nextValue;
                };

                break;
    
            case SimulationType.NUMERIC_DECREASE:
                const numericIncreaseMQTTPublicationsSimulationProps = makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = (currentValue: valueType) => {
                    if (typeof currentValue !== 'number') {
                        throw new Error ('currentValue must be a number');
                    }
                    const nextValue = MQTTPublicationsSimulationPropsSubscription.getNextValueNumericDecrease(
                        currentValue,
                        numericIncreaseMQTTPublicationsSimulationProps,
                    );

                    return nextValue;
                };

                break;
    
            case SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM:
                const numericDecreaseMQTTPublicationsSimulationProps = makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = (currentValue: valueType) => {
                    if (typeof currentValue !== 'number') {
                        throw new Error ('currentValue must be a number');
                    }
                    const nextValue = MQTTPublicationsSimulationPropsSubscription.getNextValueNumericIncreaseDecreaseRandom(
                        currentValue,
                        numericDecreaseMQTTPublicationsSimulationProps,
                    );

                    return nextValue;
                };

                break;
    
            case SimulationType.ARRAY_OF_POSIBLE_VALUES_RANDOM:
                const arrayOfPosibleValuesMQTTPublicationsSimulationProps = makeArrayOfPosibleValuesMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = () => MQTTPublicationsSimulationPropsSubscription.getNextValueArrayOfPosibleValuesItemRandom(
                    arrayOfPosibleValuesMQTTPublicationsSimulationProps,
                );

                break;
    
            default:
                break;
          };

          this.getNextValue = getNextValue;
    }

    public async startSimulation(): Promise<void> {
        while (true) {
            await this.publicate();
        }   
    }

    public async publicate(): Promise<void> {
        const {
            mqttPublicationTopic: topic,
            msBetweenPublications = this.defaultMsBetweenPublications,
        } = this.mqttPublicationsSimulationProps;
        const message = this.currentValue.toString();
        const mqttPublication: MQTTPublication = {
            topic,
            message,
        };
          
        mqttPublicate(mqttPublication);

        this.setNextValue();

        await sleep(msBetweenPublications);
    }

    private setNextValue() {
        if (this.getNextValue) {
            const currentValue = this.getNextValue(this.currentValue);
            this.currentValue = currentValue;
        } 
    }

    private static getNextValueNumericRandom(
        numericRandomMQTTPublicationsSimulationProps: NumericRandomMQTTPublicationsSimulationProps,
    ): number {
        const {
            minValue,
            maxValue,
            decimalUnits = defaultDecimalUnits,
        } = numericRandomMQTTPublicationsSimulationProps;

        const nextValue = makeRandomNumber(minValue, maxValue, decimalUnits);
        return nextValue;
    }

    private static getNextValueNumericIncrease(
        currentValue: number,
        numericRandomMQTTPublicationsSimulationProps: NumericIncreaseDecreaseMQTTPublicationsSimulationProps,
    ): number {
        const { 
            valueVariationFactor,
            maxValue,
            decimalUnits = defaultDecimalUnits,
        } = numericRandomMQTTPublicationsSimulationProps;
        
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

    private static getNextValueNumericDecrease(
        currentValue: number,
        numericRandomMQTTPublicationsSimulationProps: NumericIncreaseDecreaseMQTTPublicationsSimulationProps,
    ): number {
        const { 
            valueVariationFactor,
            minValue,
            decimalUnits = defaultDecimalUnits,
        } = numericRandomMQTTPublicationsSimulationProps;
        
        const minValueWasProvided = typeof minValue === 'number';
        const decreasedValue = currentValue - valueVariationFactor;
        const roundedDecreasedValue = roundNumber(decreasedValue, decimalUnits);
        const valueCanBeDecreased = !minValueWasProvided ||  roundedDecreasedValue >= minValue;
      
        let nextValue = currentValue;
        if (valueCanBeDecreased)  {
          nextValue = roundedDecreasedValue;
        }
      
      
        return nextValue;
    }

    private static getNextValueNumericIncreaseDecreaseRandom(
        currentValue: number,
        numericRandomMQTTPublicationsSimulationProps: NumericIncreaseDecreaseMQTTPublicationsSimulationProps,
    ): number {
        const { 
            valueVariationFactor,
            minValue,
            maxValue,
            decimalUnits = defaultDecimalUnits,
        } = numericRandomMQTTPublicationsSimulationProps;
        
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

    private static getNextValueArrayOfPosibleValuesItemRandom(
        arrayOfPosibleValuesMQTTPublicationsSimulationProps: ArrayOfPosibleValuesMQTTPublicationsSimulationProps,
    ): valueType {
        const { posibleValues } = arrayOfPosibleValuesMQTTPublicationsSimulationProps;
        const randomIndex = makeRandomNumber(0, posibleValues.length - 1);
        const nextValue = posibleValues[randomIndex];
      
        return nextValue;
    }
}

export default MQTTPublicationsSimulationPropsSubscription;
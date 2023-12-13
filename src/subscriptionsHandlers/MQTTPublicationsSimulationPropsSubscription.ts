import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import sleep from '../utils/sleep';
import { measurementType } from '../interfaces/Sensor';
import MQTTPublication from '../interfaces/MQTTPublication';
import { mqttPublicate } from '../providers/MQTTPublicationProvider';
import { subscribeToFirestoreDocument } from '../providers/FirebaseProvider';
import { makeNumberRandomPositiveOrNegative, makeRandomNumber, roundNumber } from '../factories/NumberFactory';
import SensorMeasurementsSimulationParams, { ArrayOfPossibleMeasurementsSensorMeasurementsSimulationParams, NumericIncreaseDecreaseSensorMeasurementsSimulationParams, NumericRandomSensorMeasurementsSimulationParams, SIMULATION_TYPE } from '../interfaces/SensorMeasurementsSimulationParams';
import { documentSnapshotToSensorMeasurementsSimulationParams, makeArrayOfPossibleMeasurementsMQTTPublicationsSimulationProps, makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps, makeNumericRandomMQTTPublicationsSimulationProps } from '../dataMappers/SensorMeasurementsSimulationsParamsDataMappers';

const defaultDecimalUnits = 2;

class MQTTPublicationsSimulationPropsSubscription {
    private defaultMsBetweenPublications = 10000;

    private startMeasurement: measurementType;
    private currentValue: measurementType;
    private mqttPublicationsSimulationProps: SensorMeasurementsSimulationParams;
    private getNextValue: ((currentValue: measurementType) => measurementType) | null = null;

    public constructor(mqttPublicationsSimulationProps: SensorMeasurementsSimulationParams) {
        const { startMeasurement } = mqttPublicationsSimulationProps;
        this.startMeasurement = startMeasurement;
        this.currentValue = startMeasurement;
        this.mqttPublicationsSimulationProps = mqttPublicationsSimulationProps;
        this.setMQTTPublicationsSimulationProps(mqttPublicationsSimulationProps);
    }

    public async subscribeToFirestoreMQTTPublicationsSimulationProps(): Promise<void> {
        const { id } = this.mqttPublicationsSimulationProps;
        const onMQTTPublicationsSimulationPropsChange = (
            mqttPublicationsSimulationProps: SensorMeasurementsSimulationParams,
        ) => {
            const { startMeasurement } = mqttPublicationsSimulationProps;
            if (this.startMeasurement !== startMeasurement) {
                this.startMeasurement = startMeasurement;
                this.currentValue = startMeasurement;
            }

            this.mqttPublicationsSimulationProps = mqttPublicationsSimulationProps;
            this.setMQTTPublicationsSimulationProps(mqttPublicationsSimulationProps);
        };

        subscribeToFirestoreDocument<SensorMeasurementsSimulationParams>(
            FirestoreDBCollectionNames.SensorMeasurementsSimulationsParams,
            id,
            documentSnapshotToSensorMeasurementsSimulationParams,
            onMQTTPublicationsSimulationPropsChange,
        );
    }
    
    private setMQTTPublicationsSimulationProps(mqttPublicationsSimulationProps: SensorMeasurementsSimulationParams) {        
        let getNextValue: ((currentValue: measurementType) => measurementType) | null  = null;

        const { simulationType } = mqttPublicationsSimulationProps;
        switch (simulationType) {
            case SIMULATION_TYPE.STATIC:
                getNextValue = null;
                break;
      
            case SIMULATION_TYPE.NUMERIC_RANDOM:
                const numericRandomMQTTPublicationsSimulationProps = makeNumericRandomMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = () => MQTTPublicationsSimulationPropsSubscription.getNextValueNumericRandom(
                    numericRandomMQTTPublicationsSimulationProps,
                );

                break;
    
            case SIMULATION_TYPE.NUMERIC_INCREASE:
                const numericIncreaseDecreaseMQTTPublicationsSimulationProps = makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = (currentValue: measurementType) => {
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
    
            case SIMULATION_TYPE.NUMERIC_DECREASE:
                const numericIncreaseMQTTPublicationsSimulationProps = makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = (currentValue: measurementType) => {
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
    
            case SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM:
                const numericDecreaseMQTTPublicationsSimulationProps = makeNumericIncreaseDecreaseMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = (currentValue: measurementType) => {
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
    
            case SIMULATION_TYPE.ARRAY_OF_POSSIBLE_MEASUREMENTS_RANDOM:
                const arrayOfpossibleMeasurementsMQTTPublicationsSimulationProps = makeArrayOfPossibleMeasurementsMQTTPublicationsSimulationProps(
                    mqttPublicationsSimulationProps,
                );

                getNextValue = () => MQTTPublicationsSimulationPropsSubscription.getNextValueArrayOfPossibleMeasurementsItemRandom(
                    arrayOfpossibleMeasurementsMQTTPublicationsSimulationProps,
                );

                break;
    
            default:
                break;
          };

          this.getNextValue = getNextValue;
    }

    public async startSimulation(): Promise<void> {
        console.log(`--start simulation: ${this.mqttPublicationsSimulationProps.id}`)
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
        numericRandomMQTTPublicationsSimulationProps: NumericRandomSensorMeasurementsSimulationParams,
    ): number {
        const {
            minMeasurement,
            maxMeasurement,
            decimalUnits = defaultDecimalUnits,
        } = numericRandomMQTTPublicationsSimulationProps;

        const nextValue = makeRandomNumber(minMeasurement, maxMeasurement, decimalUnits);
        return nextValue;
    }

    private static getNextValueNumericIncrease(
        currentValue: number,
        numericRandomMQTTPublicationsSimulationProps: NumericIncreaseDecreaseSensorMeasurementsSimulationParams,
    ): number {
        const { 
            measurementVariationFactor,
            maxMeasurement,
            decimalUnits = defaultDecimalUnits,
        } = numericRandomMQTTPublicationsSimulationProps;
        
        const maxMeasurementWasProvided = typeof maxMeasurement === 'number';
        const increasedValue = currentValue + measurementVariationFactor;
        const roundedIncreasedValue = roundNumber(increasedValue, decimalUnits);
        const valueCanBeIncreased = !maxMeasurementWasProvided || roundedIncreasedValue <= maxMeasurement;
      
        let nextValue = currentValue;
        if (valueCanBeIncreased)  {
          nextValue = roundedIncreasedValue;
        }
      
        return nextValue;
    }

    private static getNextValueNumericDecrease(
        currentValue: number,
        numericRandomMQTTPublicationsSimulationProps: NumericIncreaseDecreaseSensorMeasurementsSimulationParams,
    ): number {
        const { 
            measurementVariationFactor,
            minMeasurement,
            decimalUnits = defaultDecimalUnits,
        } = numericRandomMQTTPublicationsSimulationProps;
        
        const minMeasurementWasProvided = typeof minMeasurement === 'number';
        const decreasedValue = currentValue - measurementVariationFactor;
        const roundedDecreasedValue = roundNumber(decreasedValue, decimalUnits);
        const valueCanBeDecreased = !minMeasurementWasProvided ||  roundedDecreasedValue >= minMeasurement;
      
        let nextValue = currentValue;
        if (valueCanBeDecreased)  {
          nextValue = roundedDecreasedValue;
        }
      
      
        return nextValue;
    }

    private static getNextValueNumericIncreaseDecreaseRandom(
        currentValue: number,
        numericRandomMQTTPublicationsSimulationProps: NumericIncreaseDecreaseSensorMeasurementsSimulationParams,
    ): number {
        const { 
            measurementVariationFactor,
            minMeasurement,
            maxMeasurement,
            decimalUnits = defaultDecimalUnits,
        } = numericRandomMQTTPublicationsSimulationProps;
        
        const minMeasurementWasProvided = typeof minMeasurement === 'number';
        const maxMeasurementWasProvided = typeof maxMeasurement === 'number';
      
        const randomizedmeasurementVariationFactor = makeNumberRandomPositiveOrNegative(measurementVariationFactor);
        const randomizedValue = currentValue + randomizedmeasurementVariationFactor;
        const roundedRandomizedValue = roundNumber(randomizedValue, decimalUnits);
      
        const decreasedValue = currentValue - measurementVariationFactor;
        const roundedDecreasedValue = roundNumber(decreasedValue, decimalUnits);
      
        const increasedValue = currentValue + measurementVariationFactor;
        const roundedIncreasedValue = roundNumber(increasedValue, decimalUnits);
      
        const valueCanBeDecreased = !minMeasurementWasProvided ||  roundedDecreasedValue >= minMeasurement;
        const valueCanBeIncreased = !maxMeasurementWasProvided || roundedIncreasedValue <= maxMeasurement;
      
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

    private static getNextValueArrayOfPossibleMeasurementsItemRandom(
        arrayOfpossibleMeasurementsMQTTPublicationsSimulationProps: ArrayOfPossibleMeasurementsSensorMeasurementsSimulationParams,
    ): measurementType {
        const { possibleMeasurements } = arrayOfpossibleMeasurementsMQTTPublicationsSimulationProps;
        const randomIndex = makeRandomNumber(0, possibleMeasurements.length - 1);
        const nextValue = possibleMeasurements[randomIndex];
      
        return nextValue;
    }
}

export default MQTTPublicationsSimulationPropsSubscription;
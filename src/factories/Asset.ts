import Measurement from '../interfaces/Measurement';
import MQTTSubscriptionClient from './MQTTSubscriptionClient';
import { documentSnapshotToMeasurement } from '../dataMappers/MeasurementsDataMappers';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { subscribeToFirestoreDocument } from '../providers/FirebaseConnectionProvider';

class Asset {
    private measurement: Measurement;
    private mqttSubscriptionClient: MQTTSubscriptionClient | null = null;

    public constructor(measurement: Measurement) {
        this.measurement = measurement;
    }

    public async subscribeToFirestoreMeasurement(): Promise<void> {
        const { id } = this.measurement;
        const onMeasurementChange = (measurement: Measurement) => {
            this.measurement = measurement;
        };

        subscribeToFirestoreDocument<Measurement>(
            FirestoreDBCollectionNames.Measurements,
            id,
            documentSnapshotToMeasurement,
            onMeasurementChange,
        );
    } 

    public async initializeMQTTSubscriptionClient(): Promise<void> {
        const { mqttSubscriptionTopic } = this.measurement;
        const onMessage = (topic: string, message: string) => {
            console.log(`received: ('${topic}', ${message})`);
        };


        this.mqttSubscriptionClient = new MQTTSubscriptionClient(
            mqttSubscriptionTopic,
            onMessage,
        );
        await this.mqttSubscriptionClient.initialize();
    } 

    public async handleMQTTSubscriptionTopicMessage(message: string): Promise<void> {
        const { mqttSubscriptionTopic } = this.measurement;
        console.log(`received: ('${mqttSubscriptionTopic}', ${message}), ${this.measurement.valueName}`);
    } 
}

export default Asset;
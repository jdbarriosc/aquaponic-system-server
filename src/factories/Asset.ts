import Measurement from '../interfaces/Measurement';
import MQTTSubscriptionClient from './MQTTSubscriptionClient';
import { documentSnapshotToMeasurement } from '../dataMappers/MeasurementsDataMappers';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { subscribeToDocument } from '../providers/FirebaseConnectionProvider';

class Asset {
    private measurement: Measurement;
    private mqttSubscriptionClient: MQTTSubscriptionClient | null = null;

    public constructor(measurement: Measurement) {
        this.measurement = measurement;

        const { id } = measurement;
        const onMeasurementChange = (measurement: Measurement) => {
            this.measurement = measurement;
        };

        subscribeToDocument<Measurement>(
            FirestoreDBCollectionNames.Measurements,
            id,
            documentSnapshotToMeasurement,
            onMeasurementChange,
        );
    }

    public async initializeMQTTSubscriptionClient(): Promise<void> {
        const { mqttSubscriptionTopic } = this.measurement;
        const onMessage = (message: string) => console.log(message);


        this.mqttSubscriptionClient = new MQTTSubscriptionClient(
            mqttSubscriptionTopic,
            onMessage,
        );
        await this.mqttSubscriptionClient.initialize();
    } 
}

export default Asset;
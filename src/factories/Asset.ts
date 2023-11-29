import Measurement from '../interfaces/Measurement';
import { documentSnapshotToMeasurement } from '../dataMappers/MeasurementsDataMappers';
import FirestoreDBCollectionNames from '../constants/FirestoreDBCollectionNames';
import { subscribeToFirestoreDocument } from '../providers/FirebaseConnectionProvider';

class Asset {
    private measurement: Measurement;

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

    public async handleMQTTSubscriptionTopicMessage(message: string): Promise<void> {
        const { mqttSubscriptionTopic } = this.measurement;
        console.log(`received: ('${mqttSubscriptionTopic}', ${message})`);
    } 
}

export default Asset;
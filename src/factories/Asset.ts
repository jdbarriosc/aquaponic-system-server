import Measurement from '../interfaces/Measurement';
import MQTTSubscriptionClient from './MQTTSubscriptionClient';

class Asset {
    private measurement: Measurement;
    private mqttSubscriptionClient: MQTTSubscriptionClient | null = null;

    public constructor(measurement: Measurement) {
        this.measurement = measurement;
    }

    public async initializeMQTTSubscriptionClient(): Promise<void> {
        const { mqttSubscriptionTopic } = this.measurement;
        const onMessage = (message: string) => console.log(message);


        this.mqttSubscriptionClient = new MQTTSubscriptionClient(
            mqttSubscriptionTopic,
            onMessage,
        );
    } 
}

export default Asset;
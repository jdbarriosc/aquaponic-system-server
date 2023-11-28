import { MqttClient, connectAsync } from 'mqtt/*';

class MQTTSubscriptionClient {
    private brokerUrl: string;
    private client: MqttClient | null = null;
    private topic: string;
    private onMessage: (message: string) => void;

    public constructor(topic: string, onMessage: (message: string) => void) {
        if (!process.env.MQTT_SUBSCRIPTION_BROKER_URL) {
            throw new Error('MQTT_SUBSCRIPTION_BROKER_URL must be set in env variables for MQTTSubscriptionClient to be created.');
        }

        this.brokerUrl = process.env.MQTT_SUBSCRIPTION_BROKER_URL;
        this.topic = topic;
        this.onMessage = onMessage;
    }

    public async initialize(): Promise<void> {
        if (!this.client) {
            this.client = await connectAsync(this.brokerUrl);
            this.client.subscribe(this.topic);
            this.client.on('message', (topic, message) => {
                const parsedMessage = message.toString();
                this.onMessage(parsedMessage);
            });
        }
    } 
}

export default MQTTSubscriptionClient;
import { MqttClient, connectAsync } from 'mqtt';

class MQTTSubscriptionClient {
    private brokerUrl: string;
    private client: MqttClient | null = null;
    private subsctiptionTopic: string;
    private onMessage: (topic: string, message: string) => void;

    public constructor(
        subsctiptionTopic: string,
        onMessage: (topic: string, message: string) => void,
    ) {
        if (!process.env.MQTT_SUBSCRIPTION_BROKER_URL) {
            throw new Error('MQTT_SUBSCRIPTION_BROKER_URL must be set in env variables for MQTTSubscriptionClient to be created.');
        }

        this.brokerUrl = process.env.MQTT_SUBSCRIPTION_BROKER_URL;
        this.subsctiptionTopic = subsctiptionTopic;
        this.onMessage = onMessage;
    }

    public async initialize(): Promise<void> {
        if (!this.client) {
            this.client = await connectAsync(this.brokerUrl);
            this.client.subscribe(this.subsctiptionTopic);
            this.client.on('message', (topic, message) => {
                const parsedMessage = message.toString();
                this.onMessage(topic, parsedMessage);
            });
        }
    }
}

export default MQTTSubscriptionClient;
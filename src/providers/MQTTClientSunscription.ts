import { MqttClient } from "mqtt";

function MQTTClientSubscription(mqttClient: MqttClient) {
    const workspacePath = '/AquaponicSystem';
    mqttClient.subscribe(workspacePath);
    
    mqttClient.on("message", (topic, message) => {
        const parsedMessage = message.toString();

        const measurementPath = '/AquaponicSystem/FishTankTemperatureSensor/temperature';
        if (topic === measurementPath) {
            console.log(parsedMessage);
        }
    });
}

export default MQTTClientSubscription;
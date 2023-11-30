import MQTTPublicationsSimulationProps from "../interfaces/MQTTPublicationsSimulationProps";
import MQTTPublicationsSimulationsPropsService from "../services/MQTTPublicationsSimulationsPropsService";
import MQTTPublicationsSimulationPropsSubscription from "../subscriptionsHandlers/MQTTPublicationsSimulationPropsSubscription";

async function initializeMQTTPublicationsSimulations(): Promise<void> { 
  const mqttPublicationsSimulationsProps = await MQTTPublicationsSimulationsPropsService
    .getMQTTPublicationsSimulationsProps();

  mqttPublicationsSimulationsProps.forEach(
    (mqttPublicationsSimulationProps: MQTTPublicationsSimulationProps) => {
      const mqttPublicationsSimulationPropsSubscription = new MQTTPublicationsSimulationPropsSubscription(
        mqttPublicationsSimulationProps,
      );
      mqttPublicationsSimulationPropsSubscription.subscribeToFirestoreMQTTPublicationsSimulationProps();
      mqttPublicationsSimulationPropsSubscription.startSimulation();
    },
  );
}

export {
  initializeMQTTPublicationsSimulations,
};
  
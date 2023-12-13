import SensorMeasurementsSimulationParams from "../interfaces/SensorMeasurementsSimulationParams";
import SensorMeasurementsSimulationsParamsService from "../services/SensorMeasurementsSimulationsParamsService";
import MQTTPublicationsSimulationPropsSubscription from "../subscriptionsHandlers/MQTTPublicationsSimulationPropsSubscription";

async function initializeSensorMeasurementsSimulations(): Promise<void> { 
  const sensorMeasurementsSimulationsParams = await SensorMeasurementsSimulationsParamsService
    .getSensorMeasurementsSimulationsParams();

  sensorMeasurementsSimulationsParams.forEach(
    (sensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams) => {
      const mqttPublicationsSimulationPropsSubscription = new MQTTPublicationsSimulationPropsSubscription(
        sensorMeasurementsSimulationParams,
      );
      mqttPublicationsSimulationPropsSubscription.subscribeToFirestoreMQTTPublicationsSimulationProps();
      mqttPublicationsSimulationPropsSubscription.startSimulation();
    },
  );
}

export {
  initializeSensorMeasurementsSimulations,
};
  
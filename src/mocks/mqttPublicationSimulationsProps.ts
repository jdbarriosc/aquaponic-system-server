import MQTTPublicationSimulationProps, { SimulationType } from "../interfaces/MQTTPublicationSimulationProps";

export const fishTankWaterFlowSensorVolumetricFlowRateMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 120,
    valueVariationFactor: 1,
    minValue: 100,
    maxValue: 150,
};

export const fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SimulationType.STATIC,
    startValue: true,
    posibleValues: [true, false],
};

export const fishTankWaterTemperatureSensorTemperatureMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 25,
    valueVariationFactor: 1,
    minValue: 22,
    maxValue: 32,
};

export const fishTankWaterPHSensorPHMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 7,
    valueVariationFactor: 0.1,
    minValue: 6,
    maxValue: 8.5,
};

export const fishTankWaterAmmoniaSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 2,
    valueVariationFactor: 0.1,
    minValue: 0,
    maxValue: 3,
};

export const fishTankWaterNitriteSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 0.5,
    valueVariationFactor: 0.1,
    minValue: 0,
    maxValue: 1,
};

export const fishTankWaterNitrateSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 350,
    valueVariationFactor: 1,
    minValue: 0,
    maxValue: 400,
};

export const fishTankWaterDisolvedOxygenSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 5,
    valueVariationFactor: 0.1,
    minValue: 4,
    maxValue: 6,
};

export const fishTankWaterElectricConductivitySensorElectricConductivityMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 200,
    valueVariationFactor: 1,
    minValue: 100,
    maxValue: 300,
};

export const fishTankWaterCarbonateHardnessSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 100,
    valueVariationFactor: 1,
    minValue: 60,
    maxValue: 140,
};

export const growingBedWaterFlowSensorVolumetricFlowRateMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 125,
    valueVariationFactor: 1,
    minValue: 100,
    maxValue: 150,
};

export const growingBedWaterLevelSensorHasNeededWaterLevelMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SimulationType.STATIC,
    startValue: true,
    posibleValues: [true, false],
};

export const growingBedWaterTemperatureSensorTemperatureMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 25,
    valueVariationFactor: 1,
    minValue: 22,
    maxValue: 32,
};

export const growingBedWaterPHSensorPHMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 7,
    valueVariationFactor: 0.1,
    minValue: 6,
    maxValue: 8.5,
};

export const growingBedWaterAmmoniaSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps =  {
    topic: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 2,
    valueVariationFactor: 0.1,
    minValue: 0,
    maxValue: 3,
};

export const growingBedWaterNitriteSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 0.5,
    valueVariationFactor: 0.1,
    minValue: 0,
    maxValue: 1,
};

export const growingBedWaterNitrateSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 350,
    valueVariationFactor: 1,
    minValue: 0,
    maxValue: 400,
};

export const growingBedWaterDisolvedOxygenSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 5,
    valueVariationFactor: 0.1,
    minValue: 4,
    maxValue: 6,
};

export const growingBedWaterElectricConductivitySensorElectricConductivityMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 200,
    valueVariationFactor: 1,
    minValue: 100,
    maxValue: 300,
};

export const growingBedWaterCarbonateHardnessSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 100,
    valueVariationFactor: 1,
    minValue: 60,
    maxValue: 140,
};

export const greenHouseAirTemperatureSensorTemperatureMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 25,
    valueVariationFactor: 1,
    minValue: 22,
    maxValue: 32,
};

export const greenHouseAirRelativeHumiditySensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 72,
    valueVariationFactor: 1,
    minValue: 65,
    maxValue: 80,
};

export const greenHouseAirCarbonDioxideSensorConcentrationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 900,
    valueVariationFactor: 1,
    minValue: 800,
    maxValue: 1000,
};

export const greenHouseLightSensorPhotosyntheticallyActiveRadiationMQTTPublicationSimulationProps: MQTTPublicationSimulationProps = {
    topic: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
    startValue: 50,
    valueVariationFactor: 1,
    minValue: 20,
    maxValue: 80,
};

const mqttPublicationSimulationsProps: MQTTPublicationSimulationProps[] = [
    fishTankWaterFlowSensorVolumetricFlowRateMQTTPublicationSimulationProps,
    fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationSimulationProps,
    fishTankWaterTemperatureSensorTemperatureMQTTPublicationSimulationProps,
    fishTankWaterPHSensorPHMQTTPublicationSimulationProps,
    fishTankWaterAmmoniaSensorConcentrationMQTTPublicationSimulationProps,
    fishTankWaterNitriteSensorConcentrationMQTTPublicationSimulationProps,
    fishTankWaterNitrateSensorConcentrationMQTTPublicationSimulationProps,
    fishTankWaterDisolvedOxygenSensorConcentrationMQTTPublicationSimulationProps,
    fishTankWaterElectricConductivitySensorElectricConductivityMQTTPublicationSimulationProps,
    fishTankWaterCarbonateHardnessSensorConcentrationMQTTPublicationSimulationProps,
    growingBedWaterFlowSensorVolumetricFlowRateMQTTPublicationSimulationProps,
    growingBedWaterLevelSensorHasNeededWaterLevelMQTTPublicationSimulationProps,
    growingBedWaterTemperatureSensorTemperatureMQTTPublicationSimulationProps,
    growingBedWaterPHSensorPHMQTTPublicationSimulationProps,
    growingBedWaterAmmoniaSensorConcentrationMQTTPublicationSimulationProps,
    growingBedWaterNitriteSensorConcentrationMQTTPublicationSimulationProps,
    growingBedWaterNitrateSensorConcentrationMQTTPublicationSimulationProps,
    growingBedWaterDisolvedOxygenSensorConcentrationMQTTPublicationSimulationProps,
    growingBedWaterElectricConductivitySensorElectricConductivityMQTTPublicationSimulationProps,
    growingBedWaterCarbonateHardnessSensorConcentrationMQTTPublicationSimulationProps,
    greenHouseAirTemperatureSensorTemperatureMQTTPublicationSimulationProps,
    greenHouseAirRelativeHumiditySensorConcentrationMQTTPublicationSimulationProps,
    greenHouseAirCarbonDioxideSensorConcentrationMQTTPublicationSimulationProps,
    greenHouseLightSensorPhotosyntheticallyActiveRadiationMQTTPublicationSimulationProps,
];

export default mqttPublicationSimulationsProps;
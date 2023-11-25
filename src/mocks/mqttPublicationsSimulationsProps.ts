import MQTTPublicationsSimulationProps, { SimulationType } from "../interfaces/MQTTPublicationsSimulationProps";

export const fishTankWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 120,
    valueVariationFactor: 1,
    minValue: 100,
    maxValue: 150,
};

export const fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SimulationType.ARRAY_OF_POSIBLE_VALUES_RANDOM,
    startValue: true,
    posibleValues: [true, false],
};

export const fishTankWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    valueVariationFactor: 1,
    minValue: 22,
    maxValue: 32,
};

export const fishTankWaterPHSensorPHMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 7,
    valueVariationFactor: 0.1,
    minValue: 6,
    maxValue: 8.5,
};

export const fishTankWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 2,
    valueVariationFactor: 0.1,
    minValue: 0,
    maxValue: 3,
};

export const fishTankWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 0.5,
    valueVariationFactor: 0.1,
    minValue: 0,
    maxValue: 1,
};

export const fishTankWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 350,
    valueVariationFactor: 1,
    minValue: 0,
    maxValue: 400,
};

export const fishTankWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 5,
    valueVariationFactor: 0.1,
    minValue: 4,
    maxValue: 6,
};

export const fishTankWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 200,
    valueVariationFactor: 1,
    minValue: 100,
    maxValue: 300,
};

export const fishTankWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 100,
    valueVariationFactor: 1,
    minValue: 60,
    maxValue: 140,
};

export const growingBedWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 125,
    valueVariationFactor: 1,
    minValue: 100,
    maxValue: 150,
};

export const growingBedWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SimulationType.ARRAY_OF_POSIBLE_VALUES_RANDOM,
    startValue: true,
    posibleValues: [true, false],
};

export const growingBedWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    valueVariationFactor: 1,
    minValue: 22,
    maxValue: 32,
};

export const growingBedWaterPHSensorPHMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 7,
    valueVariationFactor: 0.1,
    minValue: 6,
    maxValue: 8.5,
};

export const growingBedWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps =  {
    topic: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 2,
    valueVariationFactor: 0.1,
    minValue: 0,
    maxValue: 3,
};

export const growingBedWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 0.5,
    valueVariationFactor: 0.1,
    minValue: 0,
    maxValue: 1,
};

export const growingBedWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 350,
    valueVariationFactor: 1,
    minValue: 0,
    maxValue: 400,
};

export const growingBedWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 5,
    valueVariationFactor: 0.1,
    minValue: 4,
    maxValue: 6,
};

export const growingBedWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 200,
    valueVariationFactor: 1,
    minValue: 100,
    maxValue: 300,
};

export const growingBedWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 100,
    valueVariationFactor: 1,
    minValue: 60,
    maxValue: 140,
};

export const greenHouseAirTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    valueVariationFactor: 1,
    minValue: 22,
    maxValue: 32,
};

export const greenHouseAirRelativeHumiditySensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 72,
    valueVariationFactor: 1,
    minValue: 65,
    maxValue: 80,
};

export const greenHouseAirCarbonDioxideSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 900,
    valueVariationFactor: 1,
    minValue: 800,
    maxValue: 1000,
};

export const greenHouseLightSensorPhotosyntheticallyActiveRadiationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    topic: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 50,
    valueVariationFactor: 1,
    minValue: 20,
    maxValue: 80,
};

const mqttPublicationsSimulationsProps: MQTTPublicationsSimulationProps[] = [
    fishTankWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps,
    fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps,
    fishTankWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps,
    fishTankWaterPHSensorPHMQTTPublicationsSimulationProps,
    fishTankWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps,
    fishTankWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps,
    fishTankWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps,
    fishTankWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps,
    fishTankWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps,
    fishTankWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps,
    growingBedWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps,
    growingBedWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps,
    growingBedWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps,
    growingBedWaterPHSensorPHMQTTPublicationsSimulationProps,
    growingBedWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps,
    growingBedWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps,
    growingBedWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps,
    growingBedWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps,
    growingBedWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps,
    growingBedWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps,
    greenHouseAirTemperatureSensorTemperatureMQTTPublicationsSimulationProps,
    greenHouseAirRelativeHumiditySensorConcentrationMQTTPublicationsSimulationProps,
    greenHouseAirCarbonDioxideSensorConcentrationMQTTPublicationsSimulationProps,
    greenHouseLightSensorPhotosyntheticallyActiveRadiationMQTTPublicationsSimulationProps,
];

export default mqttPublicationsSimulationsProps;
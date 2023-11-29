import MQTTPublicationsSimulationProps, { SimulationType } from '../../../interfaces/MQTTPublicationsSimulationProps';

export const fishTankWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 120,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 100,
    maxValue: 150,
};

export const fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SimulationType.ARRAY_OF_POSIBLE_VALUES_RANDOM,
    startValue: true,
    msBetweenPublications: 2000,
    posibleValues: [true, false],
};

export const fishTankWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 22,
    maxValue: 32,
};

export const fishTankWaterPHSensorPHMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 7,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 2000,
    minValue: 6,
    maxValue: 8.5,
};

export const fishTankWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 2,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 2000,
    minValue: 0,
    maxValue: 3,
};

export const fishTankWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 0.5,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 2000,
    minValue: 0,
    maxValue: 1,
};

export const fishTankWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 350,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 0,
    maxValue: 400,
};

export const fishTankWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 5,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 2000,
    minValue: 4,
    maxValue: 6,
};

export const fishTankWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 200,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 100,
    maxValue: 300,
};

export const fishTankWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 100,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 60,
    maxValue: 140,
};

export const growingBedWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 125,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 100,
    maxValue: 150,
};

export const growingBedWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SimulationType.ARRAY_OF_POSIBLE_VALUES_RANDOM,
    startValue: true,
    msBetweenPublications: 2000,
    posibleValues: [true, false],
};

export const growingBedWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 22,
    maxValue: 32,
};

export const growingBedWaterPHSensorPHMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 7,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 2000,
    minValue: 6,
    maxValue: 8.5,
};

export const growingBedWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps =  {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 2,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 2000,
    minValue: 0,
    maxValue: 3,
};

export const growingBedWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 0.5,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 2000,
    minValue: 0,
    maxValue: 1,
};

export const growingBedWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 350,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 0,
    maxValue: 400,
};

export const growingBedWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 5,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 2000,
    minValue: 4,
    maxValue: 6,
};

export const growingBedWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 200,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 100,
    maxValue: 300,
};

export const growingBedWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 100,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 60,
    maxValue: 140,
};

export const greenHouseAirTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 22,
    maxValue: 32,
};

export const greenHouseAirRelativeHumiditySensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 72,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 65,
    maxValue: 80,
};

export const greenHouseAirCarbonDioxideSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 900,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 800,
    maxValue: 1000,
};

export const greenHouseLightSensorPhotosyntheticallyActiveRadiationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    simulationType: SimulationType.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 50,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 2000,
    minValue: 20,
    maxValue: 80,
};

const mqttPublicationsSimulationsPropsDocuments: MQTTPublicationsSimulationProps[] = [
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

export default mqttPublicationsSimulationsPropsDocuments;
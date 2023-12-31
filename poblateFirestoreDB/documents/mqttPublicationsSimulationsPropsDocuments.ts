import MQTTPublicationsSimulationProps, { SIMULATION_TYPE } from "../../src/interfaces/MQTTPublicationsSimulationProps";

export const fishTankWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 120,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 100,
    maxValue: 150,
};

export const fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SIMULATION_TYPE.ARRAY_OF_POSIBLE_VALUES_RANDOM,
    startValue: true,
    msBetweenPublications: 10000,
    possibleValues: [true, false],
};

export const fishTankWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 22,
    maxValue: 32,
};

export const fishTankWaterPHSensorPHMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterPHSensorPHMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 7,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minValue: 6,
    maxValue: 8.5,
};

export const fishTankWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 2,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minValue: 0,
    maxValue: 3,
};

export const fishTankWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 0.5,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minValue: 0,
    maxValue: 1,
};

export const fishTankWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 350,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 0,
    maxValue: 400,
};

export const fishTankWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 5,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minValue: 4,
    maxValue: 6,
};

export const fishTankWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 200,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 100,
    maxValue: 300,
};

export const fishTankWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 100,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 60,
    maxValue: 140,
};

export const fishTankWaterPumpStateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterPumpStateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterPump/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startValue: 'ON',
    msBetweenPublications: 10000,
};

export const fishTankAirPumpStateStateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankAirPumpStateStateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankAirPump/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startValue: 'ON',
    msBetweenPublications: 10000,
};

export const fishTankWaterHeaterStateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'fishTankWaterHeaterStateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterHeater/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startValue: 'OFF',
    msBetweenPublications: 10000,
};

export const growingBedWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterFlowSensorVolumetricFlowRateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 125,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 100,
    maxValue: 150,
};

export const growingBedWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterLevelSensorHasNeededWaterLevelMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SIMULATION_TYPE.ARRAY_OF_POSIBLE_VALUES_RANDOM,
    startValue: true,
    msBetweenPublications: 10000,
    possibleValues: [true, false],
};

export const growingBedWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterTemperatureSensorTemperatureMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 22,
    maxValue: 32,
};

export const growingBedWaterPHSensorPHMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterPHSensorPHMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 7,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minValue: 6,
    maxValue: 8.5,
};

export const growingBedWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps =  {
    id: 'growingBedWaterAmmoniaSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 2,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minValue: 0,
    maxValue: 3,
};

export const growingBedWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterNitriteSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 0.5,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minValue: 0,
    maxValue: 1,
};

export const growingBedWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterNitrateSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 350,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 0,
    maxValue: 400,
};

export const growingBedWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterDisolvedOxygenSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 5,
    decimalUnits: 2,
    valueVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minValue: 4,
    maxValue: 6,
};

export const growingBedWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterElectricConductivitySensorElectricConductivityMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 200,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 100,
    maxValue: 300,
};

export const growingBedWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'growingBedWaterCarbonateHardnessSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 100,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 60,
    maxValue: 140,
};

export const greenHouseAirTemperatureSensorTemperatureMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'greenHouseAirTemperatureSensorTemperatureMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 25,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 22,
    maxValue: 32,
};

export const greenHouseAirRelativeHumiditySensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'greenHouseAirRelativeHumiditySensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 72,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 65,
    maxValue: 80,
};

export const greenHouseAirCarbonDioxideSensorConcentrationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'greenHouseAirCarbonDioxideSensorConcentrationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 900,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 800,
    maxValue: 1000,
};

export const greenHouseLightSensorPhotosyntheticallyActiveRadiationMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'greenHouseLightSensorPhotosyntheticallyActiveRadiationMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startValue: 50,
    decimalUnits: 2,
    valueVariationFactor: 1,
    msBetweenPublications: 10000,
    minValue: 20,
    maxValue: 80,
};

export const greenHouseLightsStateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'greenHouseLightsStateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseLights/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startValue: 'OFF',
    msBetweenPublications: 10000,
};

export const greenHouseFanSystemStateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'greenHouseFanSystemStateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseFanSystem/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startValue: 'OFF',
    msBetweenPublications: 10000,
};

export const greenHouseVentsStateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'greenHouseVentsStateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseVents/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startValue: 'CLOSED',
    msBetweenPublications: 10000,
};

export const greenHouseAirHeaterStateMQTTPublicationsSimulationProps: MQTTPublicationsSimulationProps = {
    id: 'greenHouseAirHeaterStateMQTTPublicationsSimulationProps',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirHeater/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startValue: 'OFF',
    msBetweenPublications: 10000,
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
    fishTankWaterPumpStateMQTTPublicationsSimulationProps,
    fishTankAirPumpStateStateMQTTPublicationsSimulationProps,
    fishTankWaterHeaterStateMQTTPublicationsSimulationProps,
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
    greenHouseLightsStateMQTTPublicationsSimulationProps,
    greenHouseFanSystemStateMQTTPublicationsSimulationProps,
    greenHouseVentsStateMQTTPublicationsSimulationProps,
    greenHouseAirHeaterStateMQTTPublicationsSimulationProps,
];

export default mqttPublicationsSimulationsPropsDocuments;
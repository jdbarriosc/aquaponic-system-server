import SensorMeasurementsSimulationParams, { SIMULATION_TYPE } from "../../src/interfaces/SensorMeasurementsSimulationParams";

export const fishTankWaterFlowSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterFlowSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 120,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 100,
    maxMeasurement: 150,
};

export const fishTankWaterLevelSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterLevelSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SIMULATION_TYPE.ARRAY_OF_POSSIBLE_MEASUREMENTS_RANDOM,
    startMeasurement: true,
    msBetweenPublications: 10000,
    possibleMeasurements: [true, false],
};

export const fishTankWaterTemperatureSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterTemperatureSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 25,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 22,
    maxMeasurement: 32,
};

export const fishTankWaterPHSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterPHSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 7,
    decimalUnits: 2,
    measurementVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minMeasurement: 6,
    maxMeasurement: 8.5,
};

export const fishTankWaterAmmoniaSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterAmmoniaSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 2,
    decimalUnits: 2,
    measurementVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minMeasurement: 0,
    maxMeasurement: 3,
};

export const fishTankWaterNitriteSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterNitriteSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 0.5,
    decimalUnits: 2,
    measurementVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minMeasurement: 0,
    maxMeasurement: 1,
};

export const fishTankWaterNitrateSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterNitrateSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 350,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 0,
    maxMeasurement: 400,
};

export const fishTankWaterDisolvedOxygenSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterDisolvedOxygenSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 5,
    decimalUnits: 2,
    measurementVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minMeasurement: 4,
    maxMeasurement: 6,
};

export const fishTankWaterElectricConductivitySensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterElectricConductivitySensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 200,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 100,
    maxMeasurement: 300,
};

export const fishTankWaterCarbonateHardnessSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterCarbonateHardnessSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 100,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 60,
    maxMeasurement: 140,
};

export const fishTankWaterPumpMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterPumpMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterPump/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startMeasurement: 'ON',
    msBetweenPublications: 10000,
};

export const fishTankAirPumpMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankAirPumpMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankAirPump/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startMeasurement: 'ON',
    msBetweenPublications: 10000,
};

export const fishTankWaterHeaterMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'fishTankWaterHeaterMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/FishTankWaterHeater/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startMeasurement: 'OFF',
    msBetweenPublications: 10000,
};

export const growingBedWaterFlowSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterFlowSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 125,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 100,
    maxMeasurement: 150,
};

export const growingBedWaterLevelSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterLevelSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    simulationType: SIMULATION_TYPE.ARRAY_OF_POSSIBLE_MEASUREMENTS_RANDOM,
    startMeasurement: true,
    msBetweenPublications: 10000,
    possibleMeasurements: [true, false],
};

export const growingBedWaterTemperatureSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterTemperatureSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 25,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 22,
    maxMeasurement: 32,
};

export const growingBedWaterPHSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterPHSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 7,
    decimalUnits: 2,
    measurementVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minMeasurement: 6,
    maxMeasurement: 8.5,
};

export const growingBedWaterAmmoniaSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams =  {
    id: 'growingBedWaterAmmoniaSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 2,
    decimalUnits: 2,
    measurementVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minMeasurement: 0,
    maxMeasurement: 3,
};

export const growingBedWaterNitriteSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterNitriteSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 0.5,
    decimalUnits: 2,
    measurementVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minMeasurement: 0,
    maxMeasurement: 1,
};

export const growingBedWaterNitrateSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterNitrateSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 350,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 0,
    maxMeasurement: 400,
};

export const growingBedWaterDisolvedOxygenSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterDisolvedOxygenSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 5,
    decimalUnits: 2,
    measurementVariationFactor: 0.1,
    msBetweenPublications: 10000,
    minMeasurement: 4,
    maxMeasurement: 6,
};

export const growingBedWaterElectricConductivitySensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterElectricConductivitySensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 200,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 100,
    maxMeasurement: 300,
};

export const growingBedWaterCarbonateHardnessSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'growingBedWaterCarbonateHardnessSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 100,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 60,
    maxMeasurement: 140,
};

export const greenHouseAirTemperatureSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'greenHouseAirTemperatureSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 25,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 22,
    maxMeasurement: 32,
};

export const greenHouseAirRelativeHumiditySensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'greenHouseAirRelativeHumiditySensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 72,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 65,
    maxMeasurement: 80,
};

export const greenHouseAirCarbonDioxideSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'greenHouseAirCarbonDioxideSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 900,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 800,
    maxMeasurement: 1000,
};

export const greenHouseLightSensorMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'greenHouseLightSensorMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    simulationType: SIMULATION_TYPE.NUMERIC_INCREASE_DECREASE_RANDOM,
    startMeasurement: 50,
    decimalUnits: 2,
    measurementVariationFactor: 1,
    msBetweenPublications: 10000,
    minMeasurement: 20,
    maxMeasurement: 80,
};

export const greenHouseLightsMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'greenHouseLightsMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseLights/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startMeasurement: 'OFF',
    msBetweenPublications: 10000,
};

export const greenHouseFanSystemMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'greenHouseFanSystemMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseFanSystem/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startMeasurement: 'OFF',
    msBetweenPublications: 10000,
};

export const greenHouseVentsMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'greenHouseVentsMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseVents/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startMeasurement: 'CLOSED',
    msBetweenPublications: 10000,
};

export const greenHouseAirHeaterMeasurementsSimulationParams: SensorMeasurementsSimulationParams = {
    id: 'greenHouseAirHeaterMeasurementsSimulationParams',
    mqttPublicationTopic: '/AquaponicSystem/GreenHouseAirHeater/state',
    simulationType: SIMULATION_TYPE.STATIC,
    startMeasurement: 'OFF',
    msBetweenPublications: 10000,
};

const sensorMeasurementsSimulationParamsDocuments: SensorMeasurementsSimulationParams[] = [
    fishTankWaterFlowSensorMeasurementsSimulationParams,
    fishTankWaterLevelSensorMeasurementsSimulationParams,
    fishTankWaterTemperatureSensorMeasurementsSimulationParams,
    fishTankWaterPHSensorMeasurementsSimulationParams,
    fishTankWaterAmmoniaSensorMeasurementsSimulationParams,
    fishTankWaterNitriteSensorMeasurementsSimulationParams,
    fishTankWaterNitrateSensorMeasurementsSimulationParams,
    fishTankWaterDisolvedOxygenSensorMeasurementsSimulationParams,
    fishTankWaterElectricConductivitySensorMeasurementsSimulationParams,
    fishTankWaterCarbonateHardnessSensorMeasurementsSimulationParams,
    fishTankWaterPumpMeasurementsSimulationParams,
    fishTankAirPumpMeasurementsSimulationParams,
    fishTankWaterHeaterMeasurementsSimulationParams,
    growingBedWaterFlowSensorMeasurementsSimulationParams,
    growingBedWaterLevelSensorMeasurementsSimulationParams,
    growingBedWaterTemperatureSensorMeasurementsSimulationParams,
    growingBedWaterPHSensorMeasurementsSimulationParams,
    growingBedWaterAmmoniaSensorMeasurementsSimulationParams,
    growingBedWaterNitriteSensorMeasurementsSimulationParams,
    growingBedWaterNitrateSensorMeasurementsSimulationParams,
    growingBedWaterDisolvedOxygenSensorMeasurementsSimulationParams,
    growingBedWaterElectricConductivitySensorMeasurementsSimulationParams,
    growingBedWaterCarbonateHardnessSensorMeasurementsSimulationParams,
    greenHouseAirTemperatureSensorMeasurementsSimulationParams,
    greenHouseAirRelativeHumiditySensorMeasurementsSimulationParams,
    greenHouseAirCarbonDioxideSensorMeasurementsSimulationParams,
    greenHouseLightSensorMeasurementsSimulationParams,
    greenHouseLightsMeasurementsSimulationParams,
    greenHouseFanSystemMeasurementsSimulationParams,
    greenHouseVentsMeasurementsSimulationParams,
    greenHouseAirHeaterMeasurementsSimulationParams,
];

export default sensorMeasurementsSimulationParamsDocuments;
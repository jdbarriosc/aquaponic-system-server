import Sensor, { MeasurementClasification } from "../interfaces/Sensor";

export const fishTankWaterFlowSensor: Sensor = {
    id: '',
    name: 'FishTankWaterFlowSensor',
    path: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    measurement: 'volumetricFlowRate',
    unit: 'm3/s',
    minMeasurementValue: 100,
    maxMeasurementValue: 150,
};

export const fishTankWaterLevelSensor: Sensor = {
    id: '',
    name: 'FishTankWaterLevelSensor',
    path: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    measurement: 'hasNeededWaterLevel',
    measurementValueClasifications: [
        {
            value: true,
            clasification: MeasurementClasification.INFO,
        },
        {
            value: false,
            clasification: MeasurementClasification.ERROR,
        }
    ],
};

export const fishTankWaterTemperatureSensor: Sensor = {
    id: '',
    name: 'FishTankWaterTemperatureSensor',
    path: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    measurement: 'temperature',
    unit: '°C',
    minMeasurementValue: 22,
    maxMeasurementValue: 32,
};

export const fishTankWaterPHSensor: Sensor = {
    id: '',
    name: 'FishTankWaterPHSensor',
    path: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    measurement: 'pH',
    unit: 'pH',
    minMeasurementValue: 6,
    maxMeasurementValue: 8.5,
};

export const fishTankWaterAmmoniaSensor: Sensor = {
    id: '',
    name: 'FishTankWaterAmmoniaSensor',
    path: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    maxMeasurementValue: 3,
};

export const fishTankWaterNitriteSensor: Sensor = {
    id: '',
    name: 'FishTankWaterNitriteSensor',
    path: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    maxMeasurementValue: 1,
};

export const fishTankWaterNitrateSensor: Sensor = {
    id: '',
    name: 'FishTankWaterNitrateSensor',
    path: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    maxMeasurementValue: 400,
};

export const fishTankWaterDisolvedOxygenSensor: Sensor = {
    id: '',
    name: 'FishTankWaterDisolvedOxygenSensor',
    path: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    minMeasurementValue: 4,
    maxMeasurementValue: 6,
};

export const fishTankWaterElectricConductivitySensor: Sensor = {
    id: '',
    name: 'FishTankWaterElectricConductivitySensor',
    path: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    measurement: 'electricConductivity',
    unit: 'µS/cm',
    minMeasurementValue: 100,
    maxMeasurementValue: 300,
};

export const fishTankWaterCarbonateHardnessSensor: Sensor = {
    id: '',
    name: 'FishTankWaterCarbonateHardnessSensor',
    path: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    minMeasurementValue: 60,
    maxMeasurementValue: 140,
};

export const growingBedWaterFlowSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterFlowSensor',
    path: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    measurement: 'volumetricFlowRate',
    unit: 'm3/s',
    minMeasurementValue: 100,
    maxMeasurementValue: 150,
};

export const growingBedWaterLevelSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterLevelSensor',
    path: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    measurement: 'hasNeededWaterLevel',
    measurementValueClasifications: [
        {
            value: true,
            clasification: MeasurementClasification.INFO,
        },
        {
            value: false,
            clasification: MeasurementClasification.ERROR,
        }
    ],
};

export const growingBedWaterTemperatureSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterTemperatureSensor',
    path: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    measurement: 'temperature',
    unit: '°C',
    minMeasurementValue: 22,
    maxMeasurementValue: 32,
};

export const growingBedWaterPHSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterPHSensor',
    path: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    measurement: 'pH',
    unit: 'pH',
    minMeasurementValue: 6,
    maxMeasurementValue: 8.5,
};

export const growingBedWaterAmmoniaSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterAmmoniaSensor',
    path: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    maxMeasurementValue: 3,
};

export const growingBedWaterNitriteSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterNitriteSensor',
    path: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    maxMeasurementValue: 1,
};

export const growingBedWaterNitrateSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterNitrateSensor',
    path: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    maxMeasurementValue: 400,
};

export const growingBedWaterDisolvedOxygenSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterDisolvedOxygenSensor',
    path: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    minMeasurementValue: 4,
    maxMeasurementValue: 6,
};

export const growingBedWaterElectricConductivitySensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterElectricConductivitySensor',
    path: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    measurement: 'electricConductivity',
    unit: 'µS/cm',
    minMeasurementValue: 100,
    maxMeasurementValue: 300,
};

export const growingBedWaterCarbonateHardnessSensor: Sensor = {
    id: '',
    name: 'GrowingBedWaterCarbonateHardnessSensor',
    path: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    minMeasurementValue: 60,
    maxMeasurementValue: 140,
};

export const greenHouseAirTemperatureSensor: Sensor = {
    id: '',
    name: 'GreenHouseAirTemperatureSensor',
    path: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    measurement: 'temperature',
    unit: '°C',
    minMeasurementValue: 22,
    maxMeasurementValue: 32,
};

export const greenHouseAirRelativeHumiditySensor: Sensor = {
    id: '',
    name: 'GreenHouseAirRelativeHumiditySensor',
    path: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    measurement: 'concentration',
    unit: '%',
    minMeasurementValue: 65,
    maxMeasurementValue: 80,
};

export const greenHouseAirCarbonDioxideSensor: Sensor = {
    id: '',
    name: 'GreenHouseAirCarbonDioxideSensor',
    path: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    measurement: 'concentration',
    unit: 'ppm',
    minMeasurementValue: 800,
    maxMeasurementValue: 1000,
};

export const greenHouseLightSensor: Sensor = {
    id: '',
    name: 'GreenHouseLightSensor',
    path: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    measurement: 'photosyntheticallyActiveRadiation',
    unit: 'μmol·m2·s',
};

const sensors: Sensor[] = [
    fishTankWaterFlowSensor,
    fishTankWaterLevelSensor,
    fishTankWaterTemperatureSensor,
    fishTankWaterPHSensor,
    fishTankWaterAmmoniaSensor,
    fishTankWaterNitriteSensor,
    fishTankWaterNitrateSensor,
    fishTankWaterDisolvedOxygenSensor,
    fishTankWaterElectricConductivitySensor,
    fishTankWaterCarbonateHardnessSensor,
    growingBedWaterFlowSensor,
    growingBedWaterLevelSensor,
    growingBedWaterTemperatureSensor,
    growingBedWaterPHSensor,
    growingBedWaterAmmoniaSensor,
    growingBedWaterNitriteSensor,
    growingBedWaterNitrateSensor,
    growingBedWaterDisolvedOxygenSensor,
    growingBedWaterElectricConductivitySensor,
    growingBedWaterCarbonateHardnessSensor,
    greenHouseAirTemperatureSensor,
    greenHouseAirRelativeHumiditySensor,
    greenHouseAirCarbonDioxideSensor,
    greenHouseLightSensor,
];

export default sensors;
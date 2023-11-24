import Measurement, { IconType, ModelShaderColor } from "../interfaces/Measurement";

export const fishTankWaterFlowSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterFlowSensorMeasurement',
    measurement: 'volumetricFlowRate',
    path: '/AquaponicSystem/FishTankWaterFlowSensorMeasurement/volumetricFlowRate',
    unit: 'm3/s',
    valueRangeActionProps: {
        minValue: 100,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 150,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterLevelSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterLevelSensorMeasurement',
    measurement: 'hasNeededWaterLevel',
    path: '/AquaponicSystem/FishTankWaterLevelSensorMeasurement/hasNeededWaterLevel',
    valueEqualityActionProps: [
        {
            value: true,
            iconType: IconType.INFO,
        },
        {
            value: false,
            iconType: IconType.ERROR,
        }
    ],
};

export const fishTankWaterTemperatureSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterTemperatureSensorMeasurement',
    measurement: 'temperature',
    path: '/AquaponicSystem/FishTankWaterTemperatureSensorMeasurement/temperature',
    unit: '°C',
    valueRangeActionProps: {
        minValue: 22,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 32,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterPHSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterPHSensorMeasurement',
    measurement: 'pH',
    path: '/AquaponicSystem/FishTankWaterPHSensorMeasurement/pH',
    unit: 'pH',
    valueRangeActionProps: {
        minValue: 6,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 8.5,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterAmmoniaSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterAmmoniaSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterAmmoniaSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 3,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterNitriteSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterNitriteSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterNitriteSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 1,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterNitrateSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterNitrateSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterNitrateSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 400,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterDisolvedOxygenSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterDisolvedOxygenSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        minValue: 4,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 6,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterElectricConductivitySensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterElectricConductivitySensorMeasurement',
    measurement: 'electricConductivity',
    path: '/AquaponicSystem/FishTankWaterElectricConductivitySensorMeasurement/electricConductivity',
    unit: 'µS/cm',
    valueRangeActionProps: {
        minValue: 100,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 300,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterCarbonateHardnessSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterCarbonateHardnessSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        minValue: 60,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 140,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterFlowSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterFlowSensorMeasurement',
    measurement: 'volumetricFlowRate',
    path: '/AquaponicSystem/GrowingBedWaterFlowSensorMeasurement/volumetricFlowRate',
    unit: 'm3/s',
    valueRangeActionProps: {
        minValue: 100,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 150,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterLevelSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterLevelSensorMeasurement',
    measurement: 'hasNeededWaterLevel',
    path: '/AquaponicSystem/GrowingBedWaterLevelSensorMeasurement/hasNeededWaterLevel',
    valueEqualityActionProps: [
        {
            value: true,
            iconType: IconType.INFO,
        },
        {
            value: false,
            iconType: IconType.ERROR,
        }
    ],
};

export const growingBedWaterTemperatureSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterTemperatureSensorMeasurement',
    measurement: 'temperature',
    path: '/AquaponicSystem/GrowingBedWaterTemperatureSensorMeasurement/temperature',
    unit: '°C',
    valueRangeActionProps: {
        minValue: 22,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 32,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterPHSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterPHSensorMeasurement',
    measurement: 'pH',
    path: '/AquaponicSystem/GrowingBedWaterPHSensorMeasurement/pH',
    unit: 'pH',
    valueRangeActionProps: {
        minValue: 6,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 8.5,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterAmmoniaSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterAmmoniaSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/GrowingBedWaterAmmoniaSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 3,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterNitriteSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterNitriteSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/GrowingBedWaterNitriteSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 1,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterNitrateSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterNitrateSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/GrowingBedWaterNitrateSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 400,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterDisolvedOxygenSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterDisolvedOxygenSensorMeasurement',
    path: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensorMeasurement/concentration',
    measurement: 'concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        minValue: 4,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 6,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterElectricConductivitySensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterElectricConductivitySensorMeasurement',
    path: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensorMeasurement/electricConductivity',
    measurement: 'electricConductivity',
    unit: 'µS/cm',
    valueRangeActionProps: {
        minValue: 100,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 300,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterCarbonateHardnessSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterCarbonateHardnessSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensorMeasurement/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        minValue: 60,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 140,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const greenHouseAirTemperatureSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseAirTemperatureSensorMeasurement',
    measurement: 'temperature',
    path: '/AquaponicSystem/GreenHouseAirTemperatureSensorMeasurement/temperature',
    unit: '°C',
    valueRangeActionProps: {
        minValue: 22,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 32,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const greenHouseAirRelativeHumiditySensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseAirRelativeHumiditySensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensorMeasurement/concentration',
    unit: '%',
    valueRangeActionProps: {
        minValue: 65,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 80,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const greenHouseAirCarbonDioxideSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseAirCarbonDioxideSensorMeasurement',
    measurement: 'concentration',
    path: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensorMeasurement/concentration',
    unit: 'ppm',
    valueRangeActionProps: {
        minValue: 800,
        onUnderMinValueIconType: IconType.ERROR,
        onUnderMinValueModelShaderColor: ModelShaderColor.BLUE,
        maxValue: 1000,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const greenHouseLightSensorMeasurement: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseLightSensorMeasurement',
    measurement: 'photosyntheticallyActiveRadiation',
    path: '/AquaponicSystem/GreenHouseLightSensorMeasurement/photosyntheticallyActiveRadiation',
    unit: 'μmol·m2·s',
    valueRangeActionProps: {
        minValue: 20,
        maxValue: 80,
    },
};

export const greenHouseLights: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseLights',
    measurement: 'state',
    path: '/AquaponicSystem/GreenHouseLights/state',
    valueEqualityActionProps: [
        {
            value: 'ON',
            modelShaderColor: ModelShaderColor.PURPLE,
        },
    ],
};

export const fishTankWaterPumpStateBulb: Measurement = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterPump',
    measurement: 'state',
    path: '/AquaponicSystem/FishTankWaterPumpStateBulb/state',
    valueEqualityActionProps: [
        {
            value: 'ON',
            modelShaderColor: ModelShaderColor.GREEN,
        },
    ],
};

const measurements: Measurement[] = [
    fishTankWaterFlowSensorMeasurement,
    fishTankWaterLevelSensorMeasurement,
    fishTankWaterTemperatureSensorMeasurement,
    fishTankWaterPHSensorMeasurement,
    fishTankWaterAmmoniaSensorMeasurement,
    fishTankWaterNitriteSensorMeasurement,
    fishTankWaterNitrateSensorMeasurement,
    fishTankWaterDisolvedOxygenSensorMeasurement,
    fishTankWaterElectricConductivitySensorMeasurement,
    fishTankWaterCarbonateHardnessSensorMeasurement,
    growingBedWaterFlowSensorMeasurement,
    growingBedWaterLevelSensorMeasurement,
    growingBedWaterTemperatureSensorMeasurement,
    growingBedWaterPHSensorMeasurement,
    growingBedWaterAmmoniaSensorMeasurement,
    growingBedWaterNitriteSensorMeasurement,
    growingBedWaterNitrateSensorMeasurement,
    growingBedWaterDisolvedOxygenSensorMeasurement,
    growingBedWaterElectricConductivitySensorMeasurement,
    growingBedWaterCarbonateHardnessSensorMeasurement,
    greenHouseAirTemperatureSensorMeasurement,
    greenHouseAirRelativeHumiditySensorMeasurement,
    greenHouseAirCarbonDioxideSensorMeasurement,
    greenHouseLightSensorMeasurement,
];

export default measurements;
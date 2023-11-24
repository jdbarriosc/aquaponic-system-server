import Sensor, { IconType, ModelShaderColor } from "../interfaces/Sensor";

export const fishTankWaterFlowSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterFlowSensor',
    measurement: 'volumetricFlowRate',
    path: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
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

export const fishTankWaterLevelSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterLevelSensor',
    measurement: 'hasNeededWaterLevel',
    path: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
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

export const fishTankWaterTemperatureSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterTemperatureSensor',
    measurement: 'temperature',
    path: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
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

export const fishTankWaterPHSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterPHSensor',
    measurement: 'pH',
    path: '/AquaponicSystem/FishTankWaterPHSensor/pH',
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

export const fishTankWaterAmmoniaSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterAmmoniaSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 3,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterNitriteSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterNitriteSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 1,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterNitrateSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterNitrateSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 400,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const fishTankWaterDisolvedOxygenSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterDisolvedOxygenSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
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

export const fishTankWaterElectricConductivitySensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterElectricConductivitySensor',
    measurement: 'electricConductivity',
    path: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
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

export const fishTankWaterCarbonateHardnessSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'FishTankWaterCarbonateHardnessSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
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

export const growingBedWaterFlowSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterFlowSensor',
    measurement: 'volumetricFlowRate',
    path: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
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

export const growingBedWaterLevelSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterLevelSensor',
    measurement: 'hasNeededWaterLevel',
    path: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
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

export const growingBedWaterTemperatureSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterTemperatureSensor',
    measurement: 'temperature',
    path: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
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

export const growingBedWaterPHSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterPHSensor',
    measurement: 'pH',
    path: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
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

export const growingBedWaterAmmoniaSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterAmmoniaSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 3,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterNitriteSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterNitriteSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 1,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterNitrateSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterNitrateSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 400,
        onOverMaxValueIconType: IconType.ERROR,
        onOverMaxValueModelShaderColor: ModelShaderColor.RED,
    },
};

export const growingBedWaterDisolvedOxygenSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterDisolvedOxygenSensor',
    path: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
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

export const growingBedWaterElectricConductivitySensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterElectricConductivitySensor',
    path: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
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

export const growingBedWaterCarbonateHardnessSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GrowingBedWaterCarbonateHardnessSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
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

export const greenHouseAirTemperatureSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseAirTemperatureSensor',
    measurement: 'temperature',
    path: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
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

export const greenHouseAirRelativeHumiditySensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseAirRelativeHumiditySensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
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

export const greenHouseAirCarbonDioxideSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseAirCarbonDioxideSensor',
    measurement: 'concentration',
    path: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
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

export const greenHouseLightSensor: Sensor = {
    id: '',
    workspace: 'AquaponicSystem',
    name: 'GreenHouseLightSensor',
    measurement: 'photosyntheticallyActiveRadiation',
    path: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    unit: 'μmol·m2·s',
    valueRangeActionProps: {
        minValue: 20,
        maxValue: 80,
    },
};

export const greenHouseLights: Sensor = {
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

export const fishTankWaterPumpStateBulb: Sensor = {
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
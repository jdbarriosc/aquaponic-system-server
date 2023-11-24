import Measurement, { IconType, ModelShaderColor, SimulationType } from "../interfaces/Measurement";

export const fishTankWaterFlowSensorVolumetricFlowRate: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterFlowSensor',
    name: 'volumetricFlowRate',
    aliasPath: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    unit: 'm3/s',
    valueRangeActionProps: {
        minValue: 100,
        maxValue: 150,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 120,
        variationFactor: 1,
        minValue: 100,
        maxValue: 150,
    },
};

export const fishTankWaterLevelSensorHasNeededWaterLevel: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterLevelSensor',
    name: 'hasNeededWaterLevel',
    aliasPath: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    valueEqualityActionProps: [
        {
            value: true,
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
        {
            value: false,
            actionProps: {
                iconType: IconType.ERROR,
                modelShaderColor: ModelShaderColor.RED,
            },
        },
    ],
    simulationProps: {
        simulationType: SimulationType.STATIC,
        startValue: true,
        posibleValues: [true, false],
    },
};

export const fishTankWaterTemperatureSensorTemperature: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterTemperatureSensor',
    name: 'temperature',
    aliasPath: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    unit: '°C',
    valueRangeActionProps: {
        minValue: 22,
        maxValue: 32,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 25,
        variationFactor: 1,
        minValue: 22,
        maxValue: 32,
    },
};

export const fishTankWaterPHSensorPH: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterPHSensor',
    name: 'pH',
    aliasPath: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    unit: 'pH',
    valueRangeActionProps: {
        minValue: 6,
        maxValue: 8.5,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 7,
        variationFactor: 0.1,
        minValue: 6,
        maxValue: 8.5,
    },
};

export const fishTankWaterAmmoniaSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterAmmoniaSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 3,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 2,
        variationFactor: 0.1,
        minValue: 0,
        maxValue: 3,
    },
};

export const fishTankWaterNitriteSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterNitriteSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 1,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 0.5,
        variationFactor: 0.1,
        minValue: 0,
        maxValue: 1,
    },
};

export const fishTankWaterNitrateSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterNitrateSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 400,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 350,
        variationFactor: 1,
        minValue: 0,
        maxValue: 400,
    },
};

export const fishTankWaterDisolvedOxygenSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterDisolvedOxygenSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        minValue: 4,
        maxValue: 6,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 5,
        variationFactor: 0.1,
        minValue: 4,
        maxValue: 6,
    },
};

export const fishTankWaterElectricConductivitySensorElectricConductivity: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterElectricConductivitySensor',
    name: 'electricConductivity',
    aliasPath: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    unit: 'µS/cm',
    valueRangeActionProps: {
        minValue: 100,
        maxValue: 300,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 200,
        variationFactor: 1,
        minValue: 100,
        maxValue: 300,
    },
};

export const fishTankWaterCarbonateHardnessSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterCarbonateHardnessSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        minValue: 60,
        maxValue: 140,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 100,
        variationFactor: 1,
        minValue: 60,
        maxValue: 140,
    },
};


export const fishTankWaterPumpState: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterPump',
    name: 'state',
    aliasPath: '/AquaponicSystem/FishTankWaterPump/state',
    valueEqualityActionProps: [
        {
            value: 'ON',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
    ],
};

export const fishTankAirPumpState: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankAirPump',
    name: 'state',
    aliasPath: '/AquaponicSystem/FishTankAirPump/state',
    valueEqualityActionProps: [
        {
            value: 'ON',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
    ],
};

export const fishTankWaterHeaterState: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterHeater',
    name: 'state',
    aliasPath: '/AquaponicSystem/FishTankWaterHeater/state',
    valueEqualityActionProps: [
        {
            value: 'ON',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
    ],
};

export const growingBedWaterFlowSensorVolumetricFlowRate: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterFlowSensor',
    name: 'volumetricFlowRate',
    aliasPath: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    unit: 'm3/s',
    valueRangeActionProps: {
        minValue: 100,
        maxValue: 150,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 125,
        variationFactor: 1,
        minValue: 100,
        maxValue: 150,
    },
};

export const growingBedWaterLevelSensorHasNeededWaterLevel: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterLevelSensor',
    name: 'hasNeededWaterLevel',
    aliasPath: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    valueEqualityActionProps: [
        {
            value: true,
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
        {
            value: false,
            actionProps: {
                iconType: IconType.ERROR,
                modelShaderColor: ModelShaderColor.RED,
            },
        },
    ],
    simulationProps: {
        simulationType: SimulationType.STATIC,
        startValue: true,
        posibleValues: [true, false],
    },
};

export const growingBedWaterTemperatureSensorTemperature: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterTemperatureSensor',
    name: 'temperature',
    aliasPath: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    unit: '°C',
    valueRangeActionProps: {
        minValue: 22,
        maxValue: 32,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 25,
        variationFactor: 1,
        minValue: 22,
        maxValue: 32,
    },
};

export const growingBedWaterPHSensorPH: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterPHSensor',
    name: 'pH',
    aliasPath: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    unit: 'pH',
    valueRangeActionProps: {
        minValue: 6,
        maxValue: 8.5,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 7,
        variationFactor: 0.1,
        minValue: 6,
        maxValue: 8.5,
    },
};

export const growingBedWaterAmmoniaSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterAmmoniaSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 3,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 2,
        variationFactor: 0.1,
        minValue: 0,
        maxValue: 3,
    },
};

export const growingBedWaterNitriteSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterNitriteSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 1,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 0.5,
        variationFactor: 0.1,
        minValue: 0,
        maxValue: 1,
    },
};

export const growingBedWaterNitrateSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterNitrateSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        maxValue: 400,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 350,
        variationFactor: 1,
        minValue: 0,
        maxValue: 400,
    },
};

export const growingBedWaterDisolvedOxygenSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterDisolvedOxygenSensor',
    aliasPath: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    name: 'concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        minValue: 4,
        maxValue: 6,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 5,
        variationFactor: 0.1,
        minValue: 4,
        maxValue: 6,
    },
};

export const growingBedWaterElectricConductivitySensorElectricConductivity: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterElectricConductivitySensor',
    aliasPath: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    name: 'electricConductivity',
    unit: 'µS/cm',
    valueRangeActionProps: {
        minValue: 100,
        maxValue: 300,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 200,
        variationFactor: 1,
        minValue: 100,
        maxValue: 300,
    },
};

export const growingBedWaterCarbonateHardnessSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterCarbonateHardnessSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    unit: 'mg/L',
    valueRangeActionProps: {
        minValue: 60,
        maxValue: 140,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 100,
        variationFactor: 1,
        minValue: 60,
        maxValue: 140,
    },
};

export const greenHouseAirTemperatureSensorTemperature: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirTemperatureSensor',
    name: 'temperature',
    aliasPath: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    unit: '°C',
    valueRangeActionProps: {
        minValue: 22,
        maxValue: 32,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 25,
        variationFactor: 1,
        minValue: 22,
        maxValue: 32,
    },
};

export const greenHouseAirRelativeHumiditySensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirRelativeHumiditySensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    unit: '%',
    valueRangeActionProps: {
        minValue: 65,
        maxValue: 80,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 72,
        variationFactor: 1,
        minValue: 65,
        maxValue: 80,
    },
};

export const greenHouseAirCarbonDioxideSensorConcentration: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirCarbonDioxideSensor',
    name: 'concentration',
    aliasPath: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    unit: 'ppm',
    valueRangeActionProps: {
        minValue: 800,
        maxValue: 1000,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 900,
        variationFactor: 1,
        minValue: 800,
        maxValue: 1000,
    },
};

export const greenHouseLightSensorPhotosyntheticallyActiveRadiation: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseLightSensor',
    name: 'photosyntheticallyActiveRadiation',
    aliasPath: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    unit: 'μmol·m2·s',
    valueRangeActionProps: {
        minValue: 20,
        maxValue: 80,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
    simulationProps: {
        simulationType: SimulationType.INCREMENT_DECREASE_RANDOM,
        startValue: 50,
        variationFactor: 1,
        minValue: 20,
        maxValue: 80,
    },
};

export const greenHouseLightsState: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseLights',
    name: 'state',
    aliasPath: '/AquaponicSystem/GreenHouseLights/state',
    valueEqualityActionProps: [
        {
            value: 'ON',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
    ],
};

export const greenHouseFanSystemState: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseFanSystem',
    name: 'state',
    aliasPath: '/AquaponicSystem/GreenHouseFanSystem/state',
    valueEqualityActionProps: [
        {
            value: 'ON',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
    ],
};

export const greenHouseVentsState: Measurement = {
    id: '',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseVents',
    name: 'state',
    aliasPath: '/AquaponicSystem/GreenHouseVents/state',
    valueEqualityActionProps: [
        {
            value: 'OPEN',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
    ],
};

const measurements: Measurement[] = [
    fishTankWaterFlowSensorVolumetricFlowRate,
    fishTankWaterLevelSensorHasNeededWaterLevel,
    fishTankWaterTemperatureSensorTemperature,
    fishTankWaterPHSensorPH,
    fishTankWaterAmmoniaSensorConcentration,
    fishTankWaterNitriteSensorConcentration,
    fishTankWaterNitrateSensorConcentration,
    fishTankWaterDisolvedOxygenSensorConcentration,
    fishTankWaterElectricConductivitySensorElectricConductivity,
    fishTankWaterCarbonateHardnessSensorConcentration,
    fishTankWaterPumpState,
    fishTankAirPumpState,
    fishTankWaterHeaterState,
    growingBedWaterFlowSensorVolumetricFlowRate,
    growingBedWaterLevelSensorHasNeededWaterLevel,
    growingBedWaterTemperatureSensorTemperature,
    growingBedWaterPHSensorPH,
    growingBedWaterAmmoniaSensorConcentration,
    growingBedWaterNitriteSensorConcentration,
    growingBedWaterNitrateSensorConcentration,
    growingBedWaterDisolvedOxygenSensorConcentration,
    growingBedWaterElectricConductivitySensorElectricConductivity,
    growingBedWaterCarbonateHardnessSensorConcentration,
    greenHouseAirTemperatureSensorTemperature,
    greenHouseAirRelativeHumiditySensorConcentration,
    greenHouseAirCarbonDioxideSensorConcentration,
    greenHouseLightSensorPhotosyntheticallyActiveRadiation,
    greenHouseLightsState,
    greenHouseFanSystemState,
    greenHouseVentsState,
];

export default measurements;
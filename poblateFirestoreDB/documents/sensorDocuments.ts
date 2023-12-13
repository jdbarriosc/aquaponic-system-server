import Sensor, { ICON_TYPE, MODEL_SHADER_COLOR, MEASUREMENT_TYPE } from "../../src/interfaces/Sensor";

export const fishTankWaterFlowSensor: Sensor = {
    id: 'FishTankWaterFlowSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterFlowSensor',
    valueName: 'volumetricFlowRate',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    unit: 'm3/s',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 100,
        maxMeasurement: 150,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const fishTankWaterLevelSensor: Sensor = {
    id: 'FishTankWaterLevelSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterLevelSensor',
    valueName: 'hasNeededWaterLevel',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    measurementType: MEASUREMENT_TYPE.BOOLEAN,
    measurementEqualityActionsParams: [
        {
            measurement: true,
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            },
        },
        {
            measurement: false,
            actionParams: {
                iconType: ICON_TYPE.ERROR,
                modelShaderColor: MODEL_SHADER_COLOR.RED,
            },
        },
    ],
};

export const fishTankWaterTemperatureSensor: Sensor = {
    id: 'FishTankWaterTemperatureSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterTemperatureSensor',
    valueName: 'temperature',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    unit: '°C',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 22,
        maxMeasurement: 32,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'fishTankWaterHeaterStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'OFF',
                },
            ],
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'fishTankWaterHeaterStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'ON',
                },
            ],
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'fishTankWaterHeaterStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'OFF',
                },
            ],
        },
    },
};

export const fishTankWaterPHSensor: Sensor = {
    id: 'FishTankWaterPHSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterPHSensor',
    valueName: 'pH',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    unit: 'pH',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 6,
        maxMeasurement: 8.5,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const fishTankWaterAmmoniaSensor: Sensor = {
    id: 'FishTankWaterAmmoniaSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterAmmoniaSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        maxMeasurement: 3,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const fishTankWaterNitriteSensor: Sensor = {
    id: 'FishTankWaterNitriteSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterNitriteSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        maxMeasurement: 1,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const fishTankWaterNitrateSensor: Sensor = {
    id: 'FishTankWaterNitrateSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterNitrateSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        maxMeasurement: 400,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const fishTankWaterDisolvedOxygenSensor: Sensor = {
    id: 'FishTankWaterDisolvedOxygenSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterDisolvedOxygenSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 4,
        maxMeasurement: 6,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const fishTankWaterElectricConductivitySensor: Sensor = {
    id: 'FishTankWaterElectricConductivitySensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterElectricConductivitySensor',
    valueName: 'electricConductivity',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    unit: 'µS/cm',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 100,
        maxMeasurement: 300,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const fishTankWaterCarbonateHardnessSensor: Sensor = {
    id: 'FishTankWaterCarbonateHardnessSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterCarbonateHardnessSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 60,
        maxMeasurement: 140,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};


export const fishTankWaterPump: Sensor = {
    id: 'FishTankWaterPump',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterPump',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterPump/state',
    measurementType: MEASUREMENT_TYPE.STRING,
    measurementEqualityActionsParams: [
        {
            measurement: 'ON',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            },
        },
        {
            measurement: 'OFF',
            actionParams: {
                iconType: ICON_TYPE.ERROR,
                modelShaderColor: MODEL_SHADER_COLOR.RED,
            },
        },
    ],
};

export const fishTankAirPump: Sensor = {
    id: 'FishTankAirPump',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankAirPump',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankAirPump/state',
    measurementType: MEASUREMENT_TYPE.STRING,
    measurementEqualityActionsParams: [
        {
            measurement: 'ON',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            },
        },
        {
            measurement: 'OFF',
            actionParams: {
                iconType: ICON_TYPE.ERROR,
                modelShaderColor: MODEL_SHADER_COLOR.RED,
            },
        },
    ],
};

export const fishTankWaterHeater: Sensor = {
    id: 'FishTankWaterHeater',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterHeater',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterHeater/state',
    measurementType: MEASUREMENT_TYPE.STRING,
    measurementEqualityActionsParams: [
        {
            measurement: 'ON',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            },
        },
        {
            measurement: 'OFF',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.RED,
            },
        },
    ],
};

export const growingBedWaterFlowSensor: Sensor = {
    id: 'GrowingBedWaterFlowSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterFlowSensor',
    valueName: 'volumetricFlowRate',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    unit: 'm3/s',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 100,
        maxMeasurement: 150,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const growingBedWaterLevelSensor: Sensor = {
    id: 'GrowingBedWaterLevelSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterLevelSensor',
    valueName: 'hasNeededWaterLevel',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    measurementType: MEASUREMENT_TYPE.BOOLEAN,
    measurementEqualityActionsParams: [
        {
            measurement: true,
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            },
        },
        {
            measurement: false,
            actionParams: {
                iconType: ICON_TYPE.ERROR,
                modelShaderColor: MODEL_SHADER_COLOR.RED,
            },
        },
    ],
};

export const growingBedWaterTemperatureSensor: Sensor = {
    id: 'GrowingBedWaterTemperatureSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterTemperatureSensor',
    valueName: 'temperature',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    unit: '°C',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 22,
        maxMeasurement: 32,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const growingBedWaterPHSensor: Sensor = {
    id: 'GrowingBedWaterPHSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterPHSensor',
    valueName: 'pH',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    unit: 'pH',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 6,
        maxMeasurement: 8.5,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const growingBedWaterAmmoniaSensor: Sensor = {
    id: 'GrowingBedWaterAmmoniaSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterAmmoniaSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        maxMeasurement: 3,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const growingBedWaterNitriteSensor: Sensor = {
    id: 'GrowingBedWaterNitriteSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterNitriteSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        maxMeasurement: 1,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const growingBedWaterNitrateSensor: Sensor = {
    id: 'GrowingBedWaterNitrateSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterNitrateSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        maxMeasurement: 400,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const growingBedWaterDisolvedOxygenSensor: Sensor = {
    id: 'GrowingBedWaterDisolvedOxygenSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterDisolvedOxygenSensor',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    valueName: 'concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 4,
        maxMeasurement: 6,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const growingBedWaterElectricConductivitySensor: Sensor = {
    id: 'GrowingBedWaterElectricConductivitySensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterElectricConductivitySensor',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    valueName: 'electricConductivity',
    unit: 'µS/cm',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 100,
        maxMeasurement: 300,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const growingBedWaterCarbonateHardnessSensor: Sensor = {
    id: 'GrowingBedWaterCarbonateHardnessSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterCarbonateHardnessSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    unit: 'mg/L',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 60,
        maxMeasurement: 140,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
        },
    },
};

export const greenHouseAirTemperatureSensor: Sensor = {
    id: 'GreenHouseAirTemperatureSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirTemperatureSensor',
    valueName: 'temperature',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    unit: '°C',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 22,
        maxMeasurement: 32,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'greenHouseAirHeaterStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'OFF',
                },
            ],
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'greenHouseAirHeaterStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'ON',
                },
            ],
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'greenHouseFanSystemStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'ON',
                },
                {
                    id: 'greenHouseAirHeaterStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'OFF',
                },
            ],
        },
    },
};

export const greenHouseAirRelativeHumiditySensor: Sensor = {
    id: 'GreenHouseAirRelativeHumiditySensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirRelativeHumiditySensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    unit: '%',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 65,
        maxMeasurement: 80,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'greenHouseFanSystemStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'ON',
                },
            ],
        },
    },
};

export const greenHouseAirCarbonDioxideSensor: Sensor = {
    id: 'GreenHouseAirCarbonDioxideSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirCarbonDioxideSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    unit: 'ppm',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 800,
        maxMeasurement: 1000,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.RED,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'greenHouseFanSystemStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'ON',
                },
            ],
        },
    },
};

export const greenHouseLightSensor: Sensor = {
    id: 'GreenHouseLightSensor',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseLightSensor',
    valueName: 'photosyntheticallyActiveRadiation',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    unit: 'μmol·m2·s',
    measurementType: MEASUREMENT_TYPE.NUMBER,
    measurementRangeActionParams: {
        minMeasurement: 20,
        onRangeMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'greenHouseLightsStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'OFF',
                },
            ],
        },
        onUnderMinMeasurementActionParams: {
            iconType: ICON_TYPE.ERROR,
            modelShaderColor: MODEL_SHADER_COLOR.BLUE,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'greenHouseLightsStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'ON',
                },
            ],
        },
        onOverMaxMeasurementActionParams: {
            iconType: ICON_TYPE.INFO,
            modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            sensorMeasurementsSimulationParamsPatchInfo: [
                {
                    id: 'greenHouseLightsStateMQTTPublicationsSimulationProps',
                    startMeasurement: 'OFF',
                },
            ],
        },
    },
};

export const greenHouseLights: Sensor = {
    id: 'GreenHouseLights',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseLights',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseLights/state',
    measurementType: MEASUREMENT_TYPE.STRING,
    measurementEqualityActionsParams: [
        {
            measurement: 'ON',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.PURPLE,
            },
        },
        {
            measurement: 'OFF',
            actionParams: {
                iconType: ICON_TYPE.INFO,
            },
        },
    ],
};

export const greenHouseFanSystem: Sensor = {
    id: 'GreenHouseFanSystem',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseFanSystem',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseFanSystem/state',
    measurementType: MEASUREMENT_TYPE.STRING,
    measurementEqualityActionsParams: [
        {
            measurement: 'ON',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.GREEN,
                sensorMeasurementsSimulationParamsPatchInfo: [
                    {
                        id: 'greenHouseVentsStateMQTTPublicationsSimulationProps',
                        startMeasurement: 'OPEN',
                    },
                ],
            },
        },
        {
            measurement: 'OFF',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.RED,
                sensorMeasurementsSimulationParamsPatchInfo: [
                    {
                        id: 'greenHouseVentsStateMQTTPublicationsSimulationProps',
                        startMeasurement: 'CLOSED',
                    },
                ],
            },
        },
    ],
};

export const greenHouseVents: Sensor = {
    id: 'GreenHouseVents',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseVents',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseVents/state',
    measurementType: MEASUREMENT_TYPE.STRING,
    measurementEqualityActionsParams: [
        {
            measurement: 'OPEN',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            },
        },
        {
            measurement: 'CLOSED',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.RED,
            },
        },
    ],
};

export const greenHouseAirHeater: Sensor = {
    id: 'GreenHouseAirHeater',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirHeater',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseAirHeater/state',
    measurementType: MEASUREMENT_TYPE.STRING,
    measurementEqualityActionsParams: [
        {
            measurement: 'ON',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.GREEN,
            },
        },
        {
            measurement: 'OFF',
            actionParams: {
                iconType: ICON_TYPE.INFO,
                modelShaderColor: MODEL_SHADER_COLOR.RED,
            },
        },
    ],
};

const sensorDocuments: Sensor[] = [
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
    fishTankWaterPump,
    fishTankAirPump,
    fishTankWaterHeater,
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
    greenHouseLights,
    greenHouseFanSystem,
    greenHouseVents,
    greenHouseAirHeater,
];

export default sensorDocuments;
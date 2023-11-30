import Measurement, { IconType, ModelShaderColor, ValueTypeName } from '../../../interfaces/Measurement';

export const fishTankWaterFlowSensorVolumetricFlowRate: Measurement = {
    id: 'fishTankWaterFlowSensorVolumetricFlowRate',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterFlowSensor',
    valueName: 'volumetricFlowRate',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterFlowSensor/volumetricFlowRate',
    unit: 'm3/s',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const fishTankWaterLevelSensorHasNeededWaterLevel: Measurement = {
    id: 'fishTankWaterLevelSensorHasNeededWaterLevel',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterLevelSensor',
    valueName: 'hasNeededWaterLevel',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterLevelSensor/hasNeededWaterLevel',
    valueTypeName: ValueTypeName.BOOLEAN,
    valueEqualityActionsProps: [
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
};

export const fishTankWaterTemperatureSensorTemperature: Measurement = {
    id: 'fishTankWaterTemperatureSensorTemperature',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterTemperatureSensor',
    valueName: 'temperature',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterTemperatureSensor/temperature',
    unit: '°C',
    valueTypeName: ValueTypeName.NUMBER,
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
            mqttPublication: {
                topic: '/AquaponicSystem/FishTankWaterHeater/state',
                message: 'ON',
            },
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
        },
    },
};

export const fishTankWaterPHSensorPH: Measurement = {
    id: 'fishTankWaterPHSensorPH',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterPHSensor',
    valueName: 'pH',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterPHSensor/pH',
    unit: 'pH',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const fishTankWaterAmmoniaSensorConcentration: Measurement = {
    id: 'fishTankWaterAmmoniaSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterAmmoniaSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterAmmoniaSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const fishTankWaterNitriteSensorConcentration: Measurement = {
    id: 'fishTankWaterNitriteSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterNitriteSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterNitriteSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const fishTankWaterNitrateSensorConcentration: Measurement = {
    id: 'fishTankWaterNitrateSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterNitrateSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterNitrateSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const fishTankWaterDisolvedOxygenSensorConcentration: Measurement = {
    id: 'fishTankWaterDisolvedOxygenSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterDisolvedOxygenSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterDisolvedOxygenSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const fishTankWaterElectricConductivitySensorElectricConductivity: Measurement = {
    id: 'fishTankWaterElectricConductivitySensorElectricConductivity',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterElectricConductivitySensor',
    valueName: 'electricConductivity',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterElectricConductivitySensor/electricConductivity',
    unit: 'µS/cm',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const fishTankWaterCarbonateHardnessSensorConcentration: Measurement = {
    id: 'fishTankWaterCarbonateHardnessSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterCarbonateHardnessSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterCarbonateHardnessSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};


export const fishTankWaterPumpState: Measurement = {
    id: 'fishTankWaterPumpState',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterPump',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterPump/state',
    valueTypeName: ValueTypeName.STRING,
    valueEqualityActionsProps: [
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
    id: 'fishTankAirPumpState',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankAirPump',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankAirPump/state',
    valueTypeName: ValueTypeName.STRING,
    valueEqualityActionsProps: [
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
    id: 'fishTankWaterHeaterState',
    workspaceName: 'AquaponicSystem',
    assetName: 'FishTankWaterHeater',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/FishTankWaterHeater/state',
    valueTypeName: ValueTypeName.STRING,
    valueEqualityActionsProps: [
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
    id: 'growingBedWaterFlowSensorVolumetricFlowRate',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterFlowSensor',
    valueName: 'volumetricFlowRate',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterFlowSensor/volumetricFlowRate',
    unit: 'm3/s',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const growingBedWaterLevelSensorHasNeededWaterLevel: Measurement = {
    id: 'growingBedWaterLevelSensorHasNeededWaterLevel',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterLevelSensor',
    valueName: 'hasNeededWaterLevel',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterLevelSensor/hasNeededWaterLevel',
    valueTypeName: ValueTypeName.BOOLEAN,
    valueEqualityActionsProps: [
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
};

export const growingBedWaterTemperatureSensorTemperature: Measurement = {
    id: 'growingBedWaterTemperatureSensorTemperature',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterTemperatureSensor',
    valueName: 'temperature',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterTemperatureSensor/temperature',
    unit: '°C',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const growingBedWaterPHSensorPH: Measurement = {
    id: 'growingBedWaterPHSensorPH',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterPHSensor',
    valueName: 'pH',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterPHSensor/pH',
    unit: 'pH',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const growingBedWaterAmmoniaSensorConcentration: Measurement = {
    id: 'growingBedWaterAmmoniaSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterAmmoniaSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterAmmoniaSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const growingBedWaterNitriteSensorConcentration: Measurement = {
    id: 'growingBedWaterNitriteSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterNitriteSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterNitriteSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const growingBedWaterNitrateSensorConcentration: Measurement = {
    id: 'growingBedWaterNitrateSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterNitrateSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterNitrateSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const growingBedWaterDisolvedOxygenSensorConcentration: Measurement = {
    id: 'growingBedWaterDisolvedOxygenSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterDisolvedOxygenSensor',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterDisolvedOxygenSensor/concentration',
    valueName: 'concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const growingBedWaterElectricConductivitySensorElectricConductivity: Measurement = {
    id: 'growingBedWaterElectricConductivitySensorElectricConductivity',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterElectricConductivitySensor',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterElectricConductivitySensor/electricConductivity',
    valueName: 'electricConductivity',
    unit: 'µS/cm',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const growingBedWaterCarbonateHardnessSensorConcentration: Measurement = {
    id: 'growingBedWaterCarbonateHardnessSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'GrowingBedWaterCarbonateHardnessSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GrowingBedWaterCarbonateHardnessSensor/concentration',
    unit: 'mg/L',
    valueTypeName: ValueTypeName.NUMBER,
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
};

export const greenHouseAirTemperatureSensorTemperature: Measurement = {
    id: 'greenHouseAirTemperatureSensorTemperature',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirTemperatureSensor',
    valueName: 'temperature',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseAirTemperatureSensor/temperature',
    unit: '°C',
    valueTypeName: ValueTypeName.NUMBER,
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
            mqttPublication: {
                topic: '/AquaponicSystem/GreenHouseAirHeater/state',
                message: 'ON',
            },
        },
        onOverMaxValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.RED,
            mqttPublication: {
                topic: '/AquaponicSystem/GreenHouseFanSystem/state',
                message: 'ON',
            },
        },
    },
};

export const greenHouseAirRelativeHumiditySensorConcentration: Measurement = {
    id: 'greenHouseAirRelativeHumiditySensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirRelativeHumiditySensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseAirRelativeHumiditySensor/concentration',
    unit: '%',
    valueTypeName: ValueTypeName.NUMBER,
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
            mqttPublication: {
                topic: '/AquaponicSystem/GreenHouseFanSystem/state',
                message: 'ON',
            },
        },
    },
};

export const greenHouseAirCarbonDioxideSensorConcentration: Measurement = {
    id: 'greenHouseAirCarbonDioxideSensorConcentration',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirCarbonDioxideSensor',
    valueName: 'concentration',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseAirCarbonDioxideSensor/concentration',
    unit: 'ppm',
    valueTypeName: ValueTypeName.NUMBER,
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
            mqttPublication: {
                topic: '/AquaponicSystem/GreenHouseFanSystem/state',
                message: 'ON',
            },
        },
    },
};

export const greenHouseLightSensorPhotosyntheticallyActiveRadiation: Measurement = {
    id: 'greenHouseLightSensorPhotosyntheticallyActiveRadiation',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseLightSensor',
    valueName: 'photosyntheticallyActiveRadiation',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseLightSensor/photosyntheticallyActiveRadiation',
    unit: 'μmol·m2·s',
    valueTypeName: ValueTypeName.NUMBER,
    valueRangeActionProps: {
        minValue: 20,
        onRangeValueActionProps: {
            iconType: IconType.INFO,
            modelShaderColor: ModelShaderColor.GREEN,
        },
        onUnderMinValueActionProps: {
            iconType: IconType.ERROR,
            modelShaderColor: ModelShaderColor.BLUE,
            mqttPublication: {
                topic: '/AquaponicSystem/GreenHouseLights/state',
                message: 'ON',
            },
        },
    },
};

export const greenHouseLightsState: Measurement = {
    id: 'greenHouseLightsState',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseLights',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseLights/state',
    valueTypeName: ValueTypeName.STRING,
    valueEqualityActionsProps: [
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
    id: 'greenHouseFanSystemState',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseFanSystem',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseFanSystem/state',
    valueTypeName: ValueTypeName.STRING,
    valueEqualityActionsProps: [
        {
            value: 'ON',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
                mqttPublication: {
                    topic: '/AquaponicSystem/GreenHouseVents/state',
                    message: 'OPEN',
                },
            },
        },
    ],
};

export const greenHouseVentsState: Measurement = {
    id: 'greenHouseVentsState',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseVents',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseVents/state',
    valueTypeName: ValueTypeName.STRING,
    valueEqualityActionsProps: [
        {
            value: 'OPEN',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
    ],
};

export const greenHouseAirHeaterState: Measurement = {
    id: 'greenHouseAirHeaterState',
    workspaceName: 'AquaponicSystem',
    assetName: 'GreenHouseAirHeater',
    valueName: 'state',
    mqttSubscriptionTopic: '/AquaponicSystem/GreenHouseAirHeater/state',
    valueTypeName: ValueTypeName.STRING,
    valueEqualityActionsProps: [
        {
            value: 'ON',
            actionProps: {
                iconType: IconType.INFO,
                modelShaderColor: ModelShaderColor.GREEN,
            },
        },
    ],
};

const measurementDocuments: Measurement[] = [
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
    greenHouseAirHeaterState,
];

export default measurementDocuments;
import Measurement, { IconType, ModelShaderColor, ValueTypeName } from '../../../interfaces/Measurement';

export const fishTankWaterFlowSensorVolumetricFlowRate: Measurement = {
    id: '865b205a-be51-40da-9382-234f93c197cd',
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
    id: '15dbf981-91bf-4255-8b43-ac8f190e3950',
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
    id: 'fbbd13be-9659-4112-9dad-3a748a7718c7',
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
    id: 'f21ac217-603a-4202-8be3-f2665b50ad11',
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
    id: 'd816f1c0-220c-4bdc-9c28-41d148602000',
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
    id: 'f65ab729-cd1f-4614-9f48-1f00931c1cc7',
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
    id: '90d8dcb9-997d-4320-80cc-5ec84d0b5c36',
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
    id: '6e70327a-5f9b-4555-aa65-2db9cb75b887',
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
    id: '31d6bc3d-fb0a-4f8c-9772-b2a247faed27',
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
    id: '819af112-0660-42e1-a082-1724737b07e8',
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
    id: 'eabd5799-22a9-4eb4-bd8a-c362bd3525cd',
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
    id: 'cec4df5d-8a45-4876-be1b-d2432bdb3c7a',
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
    id: '7f808f07-05fd-42b3-9dd8-261ddf94910a',
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
    id: '0ca26684-7b7c-45e2-a434-499a512b38c7',
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
    id: '5bcac675-d538-47bc-98da-d2dd6824e60b',
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
    id: '3620b3ed-9d06-43cb-a07e-9bd0fa8bf29f',
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
    id: 'f362abc3-47bd-4aa1-9928-4c5f5c59525f',
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
    id: 'ce85e678-bd4a-4ab4-9e7a-d4c3cbd06546',
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
    id: '8d1f0038-24ab-4260-9af1-ccb4c65087a1',
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
    id: 'e18df38a-e451-44dc-be53-54d1b1c0fa68',
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
    id: '7d801136-02b6-408f-b6de-0142031e5303',
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
    id: 'f30f8c50-78c6-4589-a7d7-1df894a6f263',
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
    id: '0be30064-9830-4b17-a1c8-e6bb5cb87f83',
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
    id: 'a958b190-11aa-477c-a3c7-e27ab35d9a8b',
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
    id: '2746db36-e406-47f1-b929-e78241e1fdb6',
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
    id: '4669920e-9d66-4f6f-8f49-69bb0f2ff16c',
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
    id: 'f68f364a-9282-4144-88d8-a6f02987e038',
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
    id: '18b24070-531c-4c28-ba56-52db9fe4fb60',
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
    id: '812060e2-b1cf-47a0-9416-cd590a239934',
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
    id: '5527fea1-06d1-4cd7-a4b7-7d290e3fff27',
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
    id: 'fbb648d9-98d9-4f7d-8b45-3fa885131585',
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
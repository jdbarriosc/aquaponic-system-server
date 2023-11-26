import { QuerySnapshot } from 'firebase/firestore';
import MQTTPublicationsSimulationProps from '../interfaces/MQTTPublicationsSimulationProps';

function querySnapshotToMQTTPublicationsSimulationsProps(querySnapshot: QuerySnapshot): MQTTPublicationsSimulationProps[] {
    const mqttPublicationsSimulationsProps: MQTTPublicationsSimulationProps[] = [];
    querySnapshot.forEach((doc) => {
        const mqttPublicationsSimulationProps = doc.data() as MQTTPublicationsSimulationProps;
        mqttPublicationsSimulationsProps.push(mqttPublicationsSimulationProps);
    });

    return mqttPublicationsSimulationsProps;
}

export {
    querySnapshotToMQTTPublicationsSimulationsProps,
};
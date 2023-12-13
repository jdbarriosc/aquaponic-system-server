import { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import Sensor from '../interfaces/Sensor';

function documentSnapshotToSensor(documentSnapshot: DocumentSnapshot): Sensor {
    const sensor = documentSnapshot.data() as Sensor;
    return sensor;
}

function querySnapshotToSensors(querySnapshot: QuerySnapshot): Sensor[] {
    const sensors: Sensor[] = [];
    querySnapshot.forEach((doc) => {
        const sensor = doc.data() as Sensor;
        sensors.push(sensor);
    });

    return sensors;
}

export {
    documentSnapshotToSensor,
    querySnapshotToSensors,
};
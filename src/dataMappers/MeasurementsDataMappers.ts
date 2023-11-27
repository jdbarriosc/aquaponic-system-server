import { QuerySnapshot } from 'firebase/firestore';
import Measurement from '../interfaces/Measurement';

function querySnapshotToMeasurement(querySnapshot: QuerySnapshot): Measurement[] {
    const measurements: Measurement[] = [];
    querySnapshot.forEach((doc) => {
        const measurement = doc.data() as Measurement;
        measurements.push(measurement);
    });

    return measurements;
}

export {
    querySnapshotToMeasurement,
};
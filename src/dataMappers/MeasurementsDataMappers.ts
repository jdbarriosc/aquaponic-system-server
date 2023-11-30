import { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import Measurement from '../interfaces/Measurement';

function documentSnapshotToMeasurement(documentSnapshot: DocumentSnapshot): Measurement {
    const measurement = documentSnapshot.data() as Measurement;
    return measurement;
}

function querySnapshotToMeasurements(querySnapshot: QuerySnapshot): Measurement[] {
    const measurements: Measurement[] = [];
    querySnapshot.forEach((doc) => {
        const measurement = doc.data() as Measurement;
        measurements.push(measurement);
    });

    return measurements;
}

export {
    documentSnapshotToMeasurement,
    querySnapshotToMeasurements,
};
import Measurement from "./Measurement";

interface IoTAsset {
    id: string;
    name: string;
    workspace: string;
    measurements: Measurement[];
}

export default IoTAsset;
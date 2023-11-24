import Measurement from "./Measurement";

interface Asset {
    id: string;
    name: string;
    workspace: string;
    measurements: Measurement[];
}

export default Asset;
import { Context } from 'koa';
import SensorMeasurementsSimulationsParamsService from '../services/SensorMeasurementsSimulationsParamsService';

class MQTTPublicationsSimulationsPropsRequestHandler {
  public static async getMQTTPublicationsSimulationsProps(ctx: Context): Promise<void> {
    const mqttPublicationsSimulationsProps = await SensorMeasurementsSimulationsParamsService.getSensorMeasurementsSimulationsParams();

    ctx.body = mqttPublicationsSimulationsProps;
    ctx.status = 200;
  }    
}

export default MQTTPublicationsSimulationsPropsRequestHandler;

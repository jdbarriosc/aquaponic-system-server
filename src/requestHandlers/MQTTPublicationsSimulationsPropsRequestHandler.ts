import { Context } from 'koa';
import MQTTPublicationsSimulationsPropsService from '../services/MQTTPublicationsSimulationsPropsService';

class MQTTPublicationsSimulationsPropsRequestHandler {
  public static async getMQTTPublicationsSimulationsProps(ctx: Context): Promise<void> {
    const mqttPublicationsSimulationsProps = await MQTTPublicationsSimulationsPropsService.getMQTTPublicationsSimulationsProps();

    ctx.body = mqttPublicationsSimulationsProps;
    ctx.status = 200;
  }    
}

export default MQTTPublicationsSimulationsPropsRequestHandler;

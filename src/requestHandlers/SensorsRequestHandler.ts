import { Context } from 'koa';
import SensorsService from '../services/SensorsService';

class SensorsRequestHandler {
  public static async getSensors(ctx: Context): Promise<void> {
    const sensors = await SensorsService.getSensors();

    ctx.body = sensors;
    ctx.status = 200;
  }    
}

export default SensorsRequestHandler;

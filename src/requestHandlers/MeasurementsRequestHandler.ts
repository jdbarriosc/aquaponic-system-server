import { Context } from 'koa';
import MeasurementsService from '../services/MeasurementsService';

class MeasurementsRequestHandler {
  public static async getMeasurements(ctx: Context): Promise<void> {
    const measurements = await MeasurementsService.getMeasurements();

    ctx.body = measurements;
    ctx.status = 200;
  }    
}

export default MeasurementsRequestHandler;

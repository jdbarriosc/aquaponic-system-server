import { Context } from 'koa';

class SensorDataRequestHandler {
  public static async postSensorData(ctx: Context): Promise<void> {
    console.log('post sensor data')

    ctx.body = 'post sensor data';
    ctx.status = 200;
  }    
}

export default SensorDataRequestHandler;

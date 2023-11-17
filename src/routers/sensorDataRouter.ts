import Router from '@koa/router';
import SensorDataRequestHandler from '../requestHandlers/SensorDataRequestHandler';

const sensorDataRouter = new Router({ prefix: '/sensor-data' });

sensorDataRouter.post('/', SensorDataRequestHandler.postSensorData);

export default sensorDataRouter;

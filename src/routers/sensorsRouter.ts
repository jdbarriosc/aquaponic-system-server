import Router from '@koa/router';
import SensorsRequestHandler from '../requestHandlers/SensorsRequestHandler';

const sensorsRouter = new Router({ prefix: '/sensors' });

sensorsRouter.get('/', SensorsRequestHandler.getSensors);

export default sensorsRouter;

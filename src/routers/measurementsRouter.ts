import Router from '@koa/router';
import MeasurementsRequestHandler from '../requestHandlers/MeasurementsRequestHandler';

const measurementsRouter = new Router({ prefix: '/measurements' });

measurementsRouter.get('/', MeasurementsRequestHandler.getMeasurements);

export default measurementsRouter;

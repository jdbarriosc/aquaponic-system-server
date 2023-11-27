import Router from '@koa/router';
import MQTTPublicationsSimulationsPropsRequestHandler from '../requestHandlers/MQTTPublicationsSimulationsPropsRequestHandler';

const mqttPublicationsSimulationsPropsRouter = new Router({ prefix: '/mqtt-publications-simulations-props' });

mqttPublicationsSimulationsPropsRouter.get('/', MQTTPublicationsSimulationsPropsRequestHandler.getMQTTPublicationsSimulationsProps);

export default mqttPublicationsSimulationsPropsRouter;

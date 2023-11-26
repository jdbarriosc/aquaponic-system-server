import Router from '@koa/router';
import { Context } from 'koa';
import mqttPublicationsSimulationsPropsRouter from './routers/mqttPublicationsSimulationsPropsRouter';

const getBackLanding = async (ctx: Context) => {
  ctx.body = 'Aquaponic System API';
  ctx.status = 200;
};

const routers = new Router();

const nestedRoutes: Router[]  = [
  mqttPublicationsSimulationsPropsRouter,
];

nestedRoutes.forEach((router) => {
  routers.use(router.routes(), router.allowedMethods());
});

routers.get('/', getBackLanding);

export default routers;

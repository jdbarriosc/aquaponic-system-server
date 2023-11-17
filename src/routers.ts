import Router from '@koa/router';
import { Context } from 'koa';
import sensorDataRouter from './routers/sensorDataRouter';

const getBackLanding = async (ctx: Context) => {
  ctx.body = 'Aquaponic System API';
  ctx.status = 200;
};

const routers = new Router();

const nestedRoutes: Router[]  = [
  sensorDataRouter
];

nestedRoutes.forEach((router) => {
  routers.use(router.routes(), router.allowedMethods());
});

routers.get('/', getBackLanding);

export default routers;

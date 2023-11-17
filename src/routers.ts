import Router from '@koa/router';
import { Context } from 'koa';

const getBackLanding = async (ctx: Context) => {
  ctx.body = 'Aquaponic System API';
  ctx.status = 200;
};

const routers = new Router();

const nestedRoutes: Router[]  = [];

nestedRoutes.forEach((router) => {
  router.use(router.routes(), router.allowedMethods());
});

routers.get('/', getBackLanding);

export default routers;

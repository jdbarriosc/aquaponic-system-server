import './env';
import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';
import routers from './routers';
import corsOriginHandler from './middleware/corsOriginHandler';

(async function runServer(): Promise<void> {
    try {
        const app = new Koa();

        app.proxy = true;

        app.use(helmet());
        app.use(bodyParser());
        app.use(
        cors({
            origin: corsOriginHandler,
            credentials: true,
        }),
        );

        app.use(routers.routes());
        app.use(routers.allowedMethods());

        const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 2999;

        app.listen(PORT);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
})();

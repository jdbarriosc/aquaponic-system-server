import './env';
import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import routers from './routers';
import KoaLogger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import handleErrors from './middleware/handleErrors';
import corsOriginHandler from './middleware/corsOriginHandler';
import { initializeFirebaseConnection } from './providers/FirebaseConnectionProvider';
import { initializeMQTTClient, subscribeMQTTClientToMeasurementPaths } from './providers/MQTTClientConnectionProvider';

(async function runServer(): Promise<void> {
    try {
        initializeFirebaseConnection();
        await initializeMQTTClient();
        subscribeMQTTClientToMeasurementPaths();

        const app = new Koa();

        app.proxy = true;

        app.use(KoaLogger());
        app.use(helmet());
        app.use(bodyParser());
        app.use(
        cors({
            origin: corsOriginHandler,
            credentials: true,
        }),
        );

        app.use(handleErrors);
        app.use(routers.routes());
        app.use(routers.allowedMethods());

        const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 2999;

        app.listen(PORT);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
})();
import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';

import { routeUsers } from './routes/users/users.routes';
import { routeCars } from './routes/cars/cars.routes';

const app = Fastify();

app.register(fastifyCors);
app.register(routeUsers, routeCars);

app
	.listen({
		port: 3333,
	})
	.then((resp) => console.log(`Server is running on host: ${resp}`));

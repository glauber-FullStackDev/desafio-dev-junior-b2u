import { FastifyInstance } from 'fastify';
import { randomUUID } from 'node:crypto';

import { database } from '../../database/data';
import { Users } from '../../database/models/types';

const routeUsers = async (route: FastifyInstance) => {
	route.post('/users', async (request, reply) => {
		const { phone, email, nome } = request.body as Omit<Users, 'id'>;

		const user: Users = {
			id: randomUUID(),
			phone,
			email,
			nome,
		};

		database.users.push(user);

		reply.status(201).send(user);
	});

	route.post('/users/signIn', async (request, reply) => {
		const { email, nome } = request.body;

		const signIn = database.users.find(
			(user) => user.email === email || user.nome === nome
		);

		reply.status(201).send(signIn);
	});
};

export { routeUsers };

import { FastifyInstance } from 'fastify';
import { randomUUID } from 'node:crypto';

import { database } from '../../database/data';
import { Cars } from '../../database/models/types';

const routeCars = async (route: FastifyInstance) => {
	route.post('/cars', async (request, reply) => {
		const { brand, description, nome, userId, yearOfManufacturing } =
			request.body as Omit<Cars, 'id'>;

		const car: Cars = {
			id: randomUUID(),
			brand,
			description,
			nome,
			userId,
			yearOfManufacturing,
		};

		database.cars.push(car);

		reply.status(201).send(car);
	});

	route.get('/car/:carId', async (request, reply) => {
		const { carId } = request.params;

		const car = database.cars.find((car) => car.id === carId);

		reply.status(200).send(car);
	});

	route.get('/cars/:userId', async (request, reply) => {
		const { userId } = request.params;

		const car = database.cars.filter((car) => car.userId === userId);

		reply.status(200).send(car);
	});

	route.patch('/car/:carId', async (request, reply) => {
		const { carId } = request.params;

		const { brand, description, nome, userId, yearOfManufacturing } =
			request.body as Omit<Cars, 'id'>;

		const findCar = database.cars.find((car) => car.id === carId);

		const car: Cars = {
			id: findCar?.id,
			brand,
			description,
			nome,
			userId,
			yearOfManufacturing,
		};

		const findIndex = database.cars.findIndex(
			(findCar) => findCar.id === carId
		);

		database.cars[findIndex] = car;

		reply.status(201).send(car);
	});

	route.delete('/car/:carId', async (request, reply) => {
		const { carId } = request.params;

		const index = database.cars.findIndex((car) => car.id === carId);

		database.cars.splice(index, 1);

		reply.status(200);
	});
};

export { routeCars };

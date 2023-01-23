import { Car } from '../../models/cars';
import { api } from '../http/instance';

async function getCarById(carId: string): Promise<Car> {
	const { data } = await api.get<Car>(`car/${carId}`);

	return data;
}

async function getCarByUserId(userId: string): Promise<Car[]> {
	const { data } = await api.get<Car[]>(`cars/${userId}`);

	return data;
}

async function newCar({
	brand,
	description,
	nome,
	userId,
	yearOfManufacturing,
}: Omit<Car, 'id'>) {
	await api.post(`cars`, {
		brand,
		description,
		nome,
		userId,
		yearOfManufacturing,
	});
}

async function updateCar({
	brand,
	description,
	nome,
	userId,
	yearOfManufacturing,
	id,
}: Car): Promise<void> {
	await api.patch(`car/${id}`, {
		brand,
		description,
		nome,
		userId,
		yearOfManufacturing,
	});
}

async function deleteCarById(carId?: string): Promise<void> {
	if (!carId) return;
	await api.delete(`car/${carId}`);
}

export { getCarById, getCarByUserId, deleteCarById, updateCar, newCar };

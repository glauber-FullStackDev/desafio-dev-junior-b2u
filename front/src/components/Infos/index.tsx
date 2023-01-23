import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
	getCarById,
	getCarByUserId,
	deleteCarById,
} from '../../api/functions/cars';
import { Car } from '../../models/cars';
import { alertSwal } from '../../utils/alertSwal';
import { Cards } from '../Cards';
import { Details } from '../Details';
import { Header } from '../Header';

import './styles.css';

const Infos: React.FC = () => {
	const { userId } = useParams();

	const [cars, setCars] = useState<Car[]>([]);
	const [car, setCar] = useState<Car | null>(null);

	useEffect(() => {
		(async () => {
			const data = await getCarByUserId(String(userId));
			setCars(data);
			setCar(data[0]);
		})();
	}, [userId]);

	const getCar = useCallback(async (carId: string) => {
		const car = await getCarById(carId);
		setCar(car);
	}, []);

	const deleteCar = useCallback(async () => {
		alertSwal({
			title: 'Excluir?',
			text: 'Você realmente deseja excluir?',
			icon: 'question',
			confirmButtonText: 'Sim',
			cancelButtonColor: 'red',
			cancelButtonText: 'Não',
			showCancelButton: true,
		}).then(async ({ isConfirmed }) => {
			if (isConfirmed) {
				alertSwal({
					title: 'Sucesso',
					text: 'Excluído com sucesso',
					icon: 'success',
				});
				const vehicle = cars.filter((vehicle) => vehicle.id !== car?.id);

				setCars(vehicle);
				setCar(vehicle[0]);

				await deleteCarById(car?.id);
			}
		});
	}, [car, cars]);

	return (
		<>
			<Header />
			<div className='container-info'>
				<div className='container-card'>
					{cars.map((car) => (
						<Cards key={car.id} car={car} onClick={() => getCar(car.id)} />
					))}
				</div>
				<Details car={car} onClick={() => deleteCar()} />
			</div>
		</>
	);
};

export { Infos };

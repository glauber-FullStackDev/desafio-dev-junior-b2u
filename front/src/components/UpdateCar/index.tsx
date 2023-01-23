import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateCar } from '../../api/functions/cars';
import { Header } from '../Header';

import { Input } from '../Input';

import './styles.css';

const UpdateCar: React.FC = () => {
	const {
		state: { car },
	} = useLocation();
	const navigate = useNavigate();

	const [nameCar, setNameCar] = useState(car.nome);
	const [brandCar, setBrandCar] = useState(car.brand);
	const [yearOfManufacturing, setYearOfManufacturing] = useState(
		car.yearOfManufacturing
	);
	const [description, setDescription] = useState(car.description);

	const [nameCarErro, setNameCarErro] = useState('');
	const [brandCarErro, setBrandCarErro] = useState('');
	const [yearOfManufacturingErro, setYearOfManufacturingErro] = useState('');
	const [descriptionErro, setDescriptionErro] = useState('');

	const errors = useMemo(
		() => ({
			nameCarIsEmpty: 'Campo modelo sem valor',
			brandCarIsEmpty: 'Campo marca sem valor',
			descriptionIsEmpty: 'Campo descrição sem valor',
			yearOfManufacturingIsEmpty: 'Campo data da fabricação sem valor',
			yearOfManufacturingNotValid: 'Campo nome sem valor',
		}),
		[]
	);

	const validErrors = useCallback(() => {
		if (!nameCar) {
			setNameCarErro(errors['nameCarIsEmpty']);
			return false;
		} else if (!brandCar) {
			setBrandCarErro(errors['brandCarIsEmpty']);
			return false;
		} else if (!yearOfManufacturing) {
			setYearOfManufacturingErro(errors['yearOfManufacturingIsEmpty']);
			return false;
		} else if (!description) {
			setDescriptionErro(errors['descriptionIsEmpty']);
			return false;
		}
		return true;
	}, [brandCar, description, errors, nameCar, yearOfManufacturing]);

	return (
		<>
			<Header />
			<div className='container-content'>
				<Input
					placeholder='Modelo'
					error={nameCarErro}
					value={nameCar}
					onChange={(e) => setNameCar(e.target.value)}
				/>
				<Input
					placeholder='Marca'
					error={brandCarErro}
					value={brandCar}
					onChange={(e) => setBrandCar(e.target.value)}
				/>
				<Input
					placeholder='ano'
					error={yearOfManufacturingErro}
					value={yearOfManufacturing}
					onChange={(e) => setYearOfManufacturing(e.target.value)}
				/>
				<textarea
					placeholder='Descrição'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<p>{descriptionErro}</p>

				<button
					className='new-car-button'
					onClick={() => {
						if (validErrors()) {
							updateCar({
								brand: brandCar,
								description,
								id: car.id,
								nome: nameCar,
								userId: car.userId,
								yearOfManufacturing,
							}).then(() => navigate(`/cars/${car.userId}`));
						}
					}}
				>
					Atualizar Carro
				</button>
			</div>
		</>
	);
};

export { UpdateCar };

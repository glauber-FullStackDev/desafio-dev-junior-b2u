import { useNavigate } from 'react-router-dom';
import { Car } from '../../models/cars';
import './style.css';

type Props = {
	car: Car | null;
	onClick(): void;
};

const Details: React.FC<Props> = (props) => {
	const navigate = useNavigate();

	return (
		<div className='details-container'>
			{!props.car ? (
				<>
					<div className='skeleton'></div>
					<div className='skeleton'></div>
					<div className='skeleton'></div>
					<div className='skeleton'></div>
					<div className='skeleton'></div>
				</>
			) : (
				<>
					<span className='title'>{props.car.nome}</span>
					<span className='details'>
						{props.car.brand} - {props.car.yearOfManufacturing}
					</span>

					<p className='description'>{props.car.description}</p>

					<div className='container-buttons'>
						<button
							className='edit'
							onClick={() =>
								navigate(`/car/update/${props.car?.id}`, {
									state: { car: props.car },
								})
							}
						>
							Editar
						</button>
						<button className='delete' onClick={props.onClick}>
							Excluir
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export { Details };

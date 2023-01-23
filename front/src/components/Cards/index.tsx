import { Car } from '../../models/cars';

import './style.css';

type Props = {
	car: Car;
	onClick(): void;
};

const Cards: React.FC<Props> = (props) => {
	return (
		<section>
			<div className='content-card' onClick={props.onClick}>
				<span className='title'>{props.car.nome}</span>
				<span className='details'>
					{props.car.brand} - {props.car.yearOfManufacturing}
				</span>
			</div>
		</section>
	);
};

export { Cards };

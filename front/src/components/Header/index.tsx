import { MdAddCircleOutline } from 'react-icons/md';
import { FiAlignJustify } from 'react-icons/fi';

import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';

const Header: React.FC = () => {
	const navigation = useNavigate();
	const { userId } = useParams();

	return (
		<div className='header'>
			<h2 className='title'>B2u - Car Sales</h2>

			<div className='container-icons'>
				<div
					className='icon-add'
					onClick={() => navigation(`/car/new/${userId}`)}
				>
					<MdAddCircleOutline size={25} />
					Novo Carro
				</div>

				<div className='icon-add' onClick={() => navigation(`/cars/${userId}`)}>
					<FiAlignJustify size={25} />
					<span>Listar veículos</span>
				</div>
			</div>
		</div>
	);
};

export { Header };

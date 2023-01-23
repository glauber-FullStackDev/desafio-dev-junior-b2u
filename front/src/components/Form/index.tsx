import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signIn } from '../../api/functions/signIn';
import { User } from '../../models/user';
import { Header } from '../Header';
import { Input } from '../Input';
import './styles.css';

const Form: React.FC = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState('');
	const [loadingSignIn, setLoadingSignIn] = useState(false);

	const [user, setUser] = useState<User | null>();

	const login = useCallback(async () => {
		setLoadingSignIn(true);

		const resp = await signIn(inputValue);
		setLoadingSignIn(false);
		setUser(resp);
	}, [inputValue]);

	return (
		<div className='container'>
			{!user ? (
				<form className='form'>
					<Input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<button
						className='button'
						disabled={loadingSignIn}
						onClick={(e) => {
							e.preventDefault();
							login();
						}}
					>
						Entrar
					</button>
					<button
						className='button-new'
						onClick={(e) => {
							e.preventDefault();
							navigate('/new-user');
						}}
					>
						Criar usuário
					</button>
				</form>
			) : (
				<div className='content-car'>
					<Header />
					<Link className='new-car' to={`/car/new/${user.id}`}>
						Criar novo carro
					</Link>
					<Link className='new-car' to={`/cars/${user.id}`}>
						Visualizar existentes
					</Link>
				</div>
			)}
		</div>
	);
};

export { Form };

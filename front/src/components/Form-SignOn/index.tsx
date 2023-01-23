import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '../Input';
import { signOn } from '../../api/functions/signIn';

import './styles.css';
import {
	maskPhoneNumber,
	validateEmail,
	validatePhoneNumber,
} from '../../utils/validate';
import { alertSwal } from '../../utils/alertSwal';

const FormSignOn: React.FC = () => {
	const navigate = useNavigate();
	const [inputValueName, setInputValueName] = useState('');
	const [inputValueEmail, setInputValueEmail] = useState('');
	const [inputValuePhone, setInputValuePhone] = useState('');

	const [inputValueNameErro, setInputValueNameErro] = useState('');
	const [inputValueEmailErro, setInputValueEmailErro] = useState('');
	const [inputValuePhoneErro, setInputValuePhoneErro] = useState('');

	const [loadingSignOn, setLoadingSignOn] = useState(false);

	const errors = useMemo(
		() => ({
			emailIsNotValid: 'E-mail não é válido',
			emailIsEmpty: 'Campo e-mail sem valor',
			nameIsEmpty: 'Campo nome sem valor',
			numberPhone: 'Campo Numero de telefone não é valido',
			numberPhoneIsEmpty: 'Campo Numero de telefone sem valor',
		}),
		[]
	);

	const validErrors = useCallback(() => {
		if (!inputValueEmail) {
			setInputValueEmailErro(errors['emailIsEmpty']);
			return false;
		} else if (!validateEmail(inputValueEmail)) {
			setInputValueEmailErro(errors['emailIsNotValid']);
			return false;
		} else if (!inputValueName) {
			setInputValueNameErro(errors['nameIsEmpty']);
			return false;
		} else if (!inputValuePhone) {
			setInputValuePhoneErro(errors['numberPhoneIsEmpty']);
			return false;
		} else if (!validatePhoneNumber(inputValuePhone)) {
			setInputValuePhoneErro(errors['numberPhone']);
			return false;
		}

		return true;
	}, [errors, inputValueEmail, inputValueName, inputValuePhone]);

	const login = useCallback(async () => {
		const valid = validErrors();

		if (valid) {
			setLoadingSignOn(true);

			await signOn({
				email: inputValueEmail,
				nome: inputValueName,
				phone: inputValuePhone,
			});
			setLoadingSignOn(false);
			navigate('/');
		}
	}, [inputValueEmail, inputValueName, inputValuePhone, navigate, validErrors]);

	return (
		<div className='container-SignOn'>
			<form className='form-SignOn'>
				<Input
					value={inputValueName}
					placeholder='Enter name'
					error={inputValueNameErro}
					onChange={(e) => {
						setInputValueName(e.target.value);
					}}
				/>
				<Input
					value={inputValueEmail}
					error={inputValueEmailErro}
					placeholder='Enter email'
					onChange={(e) => {
						setInputValueEmail(e.target.value);
					}}
				/>
				<Input
					value={inputValuePhone}
					error={inputValuePhoneErro}
					placeholder='Enter phone'
					onChange={(e) => {
						setInputValuePhone(maskPhoneNumber(e.target.value));
					}}
				/>
				<button
					className='button'
					disabled={loadingSignOn}
					onClick={(e) => {
						e.preventDefault();

						login();
					}}
				>
					Criar Usuário
				</button>
			</form>
		</div>
	);
};

export { FormSignOn };

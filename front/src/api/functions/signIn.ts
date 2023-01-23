import { User } from '../../models/user';
import { api } from '../http/instance';


async function signIn(val: string): Promise<User> {
	const { data } = await api.post<User>('users/signIn', {
		email: val,
		nome: val,
	});

	return data;
}

async function signOn({ email, nome, phone }: Omit<User, 'id'>): Promise<void> {
	await api.post('users', {
		email,
		nome,
		phone,
	});
}

export { signIn, signOn };

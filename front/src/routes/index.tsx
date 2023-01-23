import { createBrowserRouter } from 'react-router-dom';

import { Form } from '../components/Form';
import { FormSignOn } from '../components/Form-SignOn';
import { Infos } from '../components/Infos';
import { UpdateCar } from '../components/UpdateCar';
import { NewCar } from '../components/NewCar';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Form />,
	},
	{
		path: '/new-user',
		element: <FormSignOn />,
	},
	{
		path: '/car/new/:userId',
		element: <NewCar />,
	},
	{
		path: '/car/update/:carId',
		element: <UpdateCar />,
	},
	{
		path: '/cars/:userId',
		element: <Infos />,
	},
]);

export { router };

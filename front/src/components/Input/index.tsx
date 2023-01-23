import { InputHTMLAttributes } from 'react';
import './styles.css';

type Props = InputHTMLAttributes<HTMLInputElement> & { error?: string };
const Input: React.FC<Props> = (props) => {
	return (
		<>
			<input {...props} className='input' /> <p>{props.error}</p>
		</>
	);
};

export { Input };

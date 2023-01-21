import styles from './Input.module.css';
import InputMask from 'react-input-mask';

function Input({ type, value, placeholder, onChange }) {
    let inputElement;

    if (type === 'tel') {
        inputElement = (
          <InputMask
            mask="(99) 99999-9999"
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder="(xx) xxxxx-xxxx"
          />
        );
      } else {
        inputElement = (
            <input type={type} value={value} placeholder={placeholder} onChange={onChange} className={styles.input}/>
        );
      }

    return(
        <div>
            {inputElement}
        </div>
    )
}

export default Input;
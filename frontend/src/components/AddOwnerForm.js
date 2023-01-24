import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CarContext from '../context/CarContext';
import postFetch from '../utils/postFetch';
import '../style/OwnerForm.style.css';

function AddOwnerForm() {
  const { setOwnerId } = useContext(CarContext)

  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerTelephone, setOwnerTelephone] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();
    const ownerInfos = {
      nome: ownerName,
      email: ownerEmail,
      telefone: ownerTelephone,
    }
    const owner = await postFetch(ownerInfos, '/donos');
    setOwnerId(owner.id);
    history.push('/add/car');
  }

  useEffect(() => {
    const nameValidator = () => {
      const MINIMUM_NAME_LENGTH = 6;
      const isNameValid = ownerName.length >= MINIMUM_NAME_LENGTH;
      return isNameValid;
    }
    const emailValidator = () => {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const isEmailValid = emailRegex.test(ownerEmail);
      return isEmailValid;
    }
    const telephoneValidator = () => {
      const MAXIMUM_CEL_NUMBER = 11;
      const isNumberLengthValid = ownerTelephone.length === MAXIMUM_CEL_NUMBER;
      return isNumberLengthValid;
    }
    const handleButtonControl = () => {
      const isNameValid = nameValidator();
      const isEmailValid = emailValidator();
      const isNumberLengthValid = telephoneValidator();
      if (isNameValid && isEmailValid && isNumberLengthValid) {
        return setIsButtonDisabled(false);
      }
      return setIsButtonDisabled(true);
    }
    handleButtonControl();
  })

  const handleInputsControl = ({ target: { name, value } }) => {
    const options = {
      nome: () => setOwnerName(value),
      email: () => setOwnerEmail(value),
      telefone: () => setOwnerTelephone(value),
    }
    options[name]();
  }

  return (
    <div className='owner-form'>
      <h2>Informações de contato:</h2>
      <form>
        <label htmlFor='nome'>
          <p>Nome:</p>
          <input
            type='text'
            name='nome'
            onChange={handleInputsControl}
          />
        </label>
        <label htmlFor='email'>
          <p>Email:</p>
          <input
            type='email'
            name='email'
            onChange={handleInputsControl}
          />
        </label>
        <label htmlFor='telefone'>
          <p>Telefone:</p>
          <input
            type='text'
            name='telefone'
            onChange={handleInputsControl}
          />
        </label>
        <button
          type='submit'
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          Cadastrar carro
        </button>
      </form>
    </div>
  )
}

export default AddOwnerForm
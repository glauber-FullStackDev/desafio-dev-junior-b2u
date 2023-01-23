import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CarContext from '../context/CarContext';

function AddOwnerForm() {
  const { setOwnerInfos } = useContext(CarContext)

  const [ownerName, setOwnerName] = useState();
  const [ownerEmail, setOwnerEmail] = useState();
  const [ownerTelephone, setOwnerTelephone] = useState();

  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    const ownerInfos = {
      nome: ownerName,
      email: ownerEmail,
      telefone: ownerTelephone,
    }
    setOwnerInfos(ownerInfos)
    history.push('/add/car')
  }

  const handleInputsControl = ({ target: { name, value } }) => {
    const options = {
      nome: () => setOwnerName(value),
      email: () => setOwnerEmail(value),
      telefone: () => setOwnerTelephone(value),
    }
    options[name]();
  }

  return (
    <div>
      <h2>Informações de contato:</h2>
      <form>
        <label htmlFor='nome'>
          Nome:
          <input
            type='text'
            name='nome'
            onChange={handleInputsControl}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input
            type='email'
            name='email'
            onChange={handleInputsControl}
          />
        </label>
        <label htmlFor='telefone'>
          Telefone:
          <input
            type='text'
            name='telefone'
            onChange={handleInputsControl}
          />
        </label>
        <button
          type='submit'
          onClick={handleClick}
        >
          Cadastrar carro
        </button>
      </form>
    </div>
  )
}

export default AddOwnerForm
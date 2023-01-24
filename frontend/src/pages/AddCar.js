import React from 'react'
import { useHistory } from 'react-router-dom';
import AddCarForm from '../components/AddCarForm';

function AddCar() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cars')
  }

  return (
    <>
      <AddCarForm />
      <button
        type='button'
        onClick={handleClick}
      >
        Voltar
      </button>
    </>
  )
}

export default AddCar
import React, { useContext, useEffect, useState } from 'react';
import postFetch from '../utils/postFetch';
import CarContext from '../context/CarContext';
import { useHistory } from 'react-router-dom';
import '../style/AddCarForm.style.css';

function AddCarForm() {
  const { ownerId } = useContext(CarContext);

  const [carName, setCarName] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carDescription, setCarDescription] = useState('');
  const [yearOfFabrication, setYearOfFabrication] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const history = useHistory();

  const handleInputs = ({ target: { name, value } }) => {
    const options = {
      nome: () => setCarName(value),
      marca: () => setCarBrand(value),
      descricao: () => setCarDescription(value),
      anoFabricacao: () => setYearOfFabrication(value)
    }
    options[name]();
  }

  useEffect(() => {
    const nameValidator = () => {
      const MINIMUM_NAME_LENGTH = 6;
      const isNameValid = carName.length > MINIMUM_NAME_LENGTH;
      return isNameValid;
    }
    const brandValidator = () => {
      const MINIMUM_BRAND_LENGTH = 1;
      const isBrandValid = carBrand.length >= MINIMUM_BRAND_LENGTH;
      return isBrandValid;
    }
    const descriptionValidator = () => {
      const MINIMUM_DESCRIPTION_LENGTH = 20;
      const isDescriptionValid = carDescription.length >= MINIMUM_DESCRIPTION_LENGTH;
      return isDescriptionValid;
    }
    const yearValidator = () => {
      const MINIMUM_YEAR = 2000;
      const MAXIMUM_YEAR = 2023;
      const isYearValid = yearOfFabrication >= MINIMUM_YEAR && yearOfFabrication <= MAXIMUM_YEAR;
      return isYearValid;
    }
    const buttonControl = () => {
      const isNameValid = nameValidator();
      const isBrandValid = brandValidator();
      const isDescriptionValid = descriptionValidator();
      const isYearValid = yearValidator();
      if (isNameValid && isBrandValid && isDescriptionValid && isYearValid) {
        return setIsButtonDisabled(false);
      }
      return setIsButtonDisabled(true);
    }
    buttonControl();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const carInfos = {
      nome: carName,
      marca: carBrand,
      donoId: ownerId,
      descricao: carDescription,
      anoFabricacao: yearOfFabrication,
    }
    await postFetch(carInfos, '/carros')
    history.push('/cars')
    
  }

  return (
    <div className='add-car-form'>
      <h2>Cadastre seu carro:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nome'>
          <p>Nome do Carro:</p>
          <input type='text' name='nome' onChange={handleInputs} />
        </label>
        <label htmlFor='marca'>
          <p>Marca do Carro:</p>
          <input type='text' name='marca' onChange={handleInputs} />
        </label>
        <label htmlFor='anoFabricacao'>
          <p>Ano de Fabricação:</p>
          <input
            type="number"
            name='anoFabricacao'
            min="2000"
            max="2023"
            onChange={handleInputs}
          />
        </label>
        <label htmlFor='descricao'>
          <p>Descrição:</p>
          <input type='text' name='descricao' onChange={handleInputs} />
        </label>
        <button
          onClick={handleSubmit}
          type='submit'
          name='submit-form'
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddCarForm
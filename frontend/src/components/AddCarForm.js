import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import postFetch from '../utils/postFetch';
import CarContext from '../context/CarContext';

function AddCarForm() {
  const { ownerInfos } = useContext(CarContext)

  // const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postFetch(ownerInfos, '/donos');
    // history.push('/add/owner');
  }

  return (
    <div>
      <h2>Cadastre seu carro:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nome'>
          Nome do Carro:
          <input type='text' name='nome' />
        </label>
        <label htmlFor='marca'>
          Marca do Carro:
          <input type='text' name='marca' />
        </label>
        <label htmlFor='anoFabricacao'>
          Ano de Fabricação:
          <input
            type="number"
            name='anoFabricacao'
            min="2000"
            max="2023"
          />
        </label>
        <label htmlFor='descricao'>
          Descrição:
          <input type='text' name='descricao' />
        </label>
        <label htmlFor='imagem'>
          Imagem do Carro:
          <input disabled={true} type='file' name='imagem' defaultValue={null} />
        </label>
        <button
          onClick={handleSubmit}
          type='submit'
          name='submit-form'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddCarForm
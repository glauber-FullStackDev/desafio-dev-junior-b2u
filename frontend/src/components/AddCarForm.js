import React from 'react';
import postFetch from '../utils/postFetch';

function AddCarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postFetch()
    return response;
  }

  return (
    <div>
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
          <input type='text' name='anoFabricacao' />
        </label>
        <label htmlFor='descricao'>
          Descrição:
          <input type='text' name='descricao' />
        </label>
        <label htmlFor='imagem'>
          Imagem do Carro:
          <input type='file' name='imagem' />
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
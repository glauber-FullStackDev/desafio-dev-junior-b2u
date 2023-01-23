import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import putFetch from '../utils/putFetch';

function EditCarForm() {
  const [nameInput, setNameInput] = useState('');
  const [marcaInput, setMarcaInput] = useState('');
  const [anoFabricacaoInput, setAnoFabricacaoInput] = useState('');
  const [descricaoInput, setDescricaoInput] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { params } = useRouteMatch();
  const history = useHistory();

  const MINIMUM_YEAR = 1900;

  const handleInputsChange = ({ target: { name, value } }) => {
    const options = {
      nome: () => setNameInput(value),
      marca: () => setMarcaInput(value),
      anoFabricacao: () => setAnoFabricacaoInput(value),
      descricao: () => setDescricaoInput(value),
    }
    options[name]();
  }

  useEffect(() => {
    const inputsControl = () => {
      if (!nameInput || !marcaInput || Number(anoFabricacaoInput) < MINIMUM_YEAR || !descricaoInput) {
        return setIsButtonDisabled(true);
      }
      return setIsButtonDisabled(false);
    }
    inputsControl()
  });

  const handleSubmit = async (event) => {
    event.preventDefault()
    const bodyRequest = {
      nome: nameInput,
      marca: marcaInput,
      anoFabricacao: anoFabricacaoInput,
      descricao: descricaoInput,
    }
    await putFetch(bodyRequest, params.id);
    history.push('/success');
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* submit pressing enter */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='nome'>
          Nome do carro:
          <input
            type='text'
            name='nome'
            onChange={handleInputsChange}
          />
        </label>
        <label htmlFor='marca'>
          Marca do carro:
          <input
            type='text'
            name='marca'
            onChange={handleInputsChange}
          />
        </label>
        <label htmlFor='anoFabricacao'>
          Ano de fabricação:
          <input
            type="number"
            name='anoFabricacao'
            min="1900"
            max="2099"
            step="1"
            onChange={handleInputsChange}
          />
        </label>
        <label htmlFor='descricao'>
          Descrição:
          <textarea
            name='descricao'
            onChange={handleInputsChange}
          />
        </label>
        <button
          type='submit'
          onClick={handleSubmit}
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditCarForm
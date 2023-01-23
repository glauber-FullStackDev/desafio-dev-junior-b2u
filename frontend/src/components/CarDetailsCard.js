import React, { useState } from 'react';
import PropTypes from 'prop-types';
import noImage from '../image/no-image.png';
import { useHistory } from 'react-router-dom';
import EditCarForm from './EditCarForm';

function CarDetailsCard({ nome, descricao, marca, anoFabricacao, dono }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const history = useHistory();

  return (
    <div
      style={{
        width: '70vw',
        margin: 'auto',
      }}
    >
      <h2>{`${marca} ${nome}`}</h2>
      <img
        src={noImage}
        alt={nome}
        style={{ width: '20em ' }}
      />
      <p>{descricao}</p>
      <p>{anoFabricacao}</p>
      <p>{dono.nome}</p>
      <p>{dono.email}</p>
      <p>{dono.telefone}</p>
      <button
        type='button'
        onClick={() => setShowEditForm(!showEditForm)}
      >
        Editar
      </button>
      {showEditForm && (
        <EditCarForm
          setShowEditForm={setShowEditForm}
        />
      )}
      <button
        type='button'
        onClick={() => history.push('/cars')}
      >
        Voltar
      </button>
    </div>
  )
}

CarDetailsCard.propTypes = {
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  anoFabricacao: PropTypes.string.isRequired,
  dono: PropTypes.shape(PropTypes.string.isRequired).isRequired,
}

export default CarDetailsCard
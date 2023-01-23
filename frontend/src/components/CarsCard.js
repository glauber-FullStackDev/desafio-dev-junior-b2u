import React, { useState } from 'react'
import PropTypes from 'prop-types'
import noImage from '../image/no-image.png';
import EditCarForm from './EditCarForm';
import { Link } from 'react-router-dom';
import RemoveCarButton from './RemoveCarButton';

function CarsCard({ id, nome, anoFabricacao, marca, dono }) {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div style={{
      position: 'relative',
      width: '70%',
      margin: 'auto',
    }}>
      <Link
        style={{ display: 'flex' }}
        to={`/cars/${id}`}
      >
        <img
          src={noImage}
          alt={`${nome}`}
          style={{ width: '100px' }}
        />
        <div>
          <p>{nome}</p>
          <p>{anoFabricacao}</p>
          <p>{marca}</p>
        </div>
        <p>{dono.nome}</p>
      </Link>
      <RemoveCarButton
        id={id}
      />
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
    </div>
  )
}

CarsCard.propTypes = {
  nome: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  anoFabricacao: PropTypes.string.isRequired,
  dono: PropTypes.shape(PropTypes.string.isRequired).isRequired,
}

export default CarsCard
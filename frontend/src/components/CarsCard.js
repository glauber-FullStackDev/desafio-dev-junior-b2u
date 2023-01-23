import React from 'react'
import PropTypes from 'prop-types'
import noImage from '../image/no-image.png';
import { Link } from 'react-router-dom';
import RemoveCarButton from './RemoveCarButton';

function CarsCard({ id, nome, anoFabricacao, marca, dono }) {
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
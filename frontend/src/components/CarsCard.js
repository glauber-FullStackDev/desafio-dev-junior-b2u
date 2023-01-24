import React from 'react'
import PropTypes from 'prop-types'
import noImage from '../image/no-image.png';
import { Link } from 'react-router-dom';
import RemoveCarButton from './RemoveCarButton';

function CarsCard({ id, nome, anoFabricacao, marca, dono }) {
  return (
    <div className="cars-card">
      <Link
        to={`/cars/${id}`}
      >
        <img
          src={noImage}
          alt={`${nome}`}
        />
        <div className="car-infos">
          <p>{`${marca} ${nome}`}</p>
          <p>{anoFabricacao}</p>
        </div>
        <div className='owner-infos'>
          <p>{dono.nome}</p>
          <p>{dono.telefone}</p>
          <p>{dono.email}</p>
        </div>
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
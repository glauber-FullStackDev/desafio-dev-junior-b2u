import React from 'react'
import PropTypes from 'prop-types'
import noImage from '../image/no-image.png';

function CarsCard({ nome, anoFabricacao, marca, dono }) {
  return (
    <div>
      <img
        src={noImage}
        alt={`${nome}`} 
        style={{ width: '100px' }}
      />
      <p>{nome}</p>
      <p>{anoFabricacao}</p>
      <p>{marca}</p>
      <p>{dono.name}</p>
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
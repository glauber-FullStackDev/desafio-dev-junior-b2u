import React from 'react'
import PropTypes from 'prop-types'

function CarsCard({ name, carImage, model, owner }) {
  return (
    <div>
      <p>{name}</p>
      <img src={carImage} alt={`${name}`} />
      <p>{model}</p>
      <p>{owner.name}</p>
    </div>
  )
}

CarsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  owner: PropTypes.shape(PropTypes.string.isRequired).isRequired,
}

export default CarsCard
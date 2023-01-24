import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../image/no-image.png';
import { useHistory, useRouteMatch } from 'react-router-dom';

function CarDetailsCard({ nome, descricao, marca, anoFabricacao, dono }) {
  const history = useHistory();
  const { params } = useRouteMatch()

  return (
    <div className='car-details'>
      <div className='car-presentation'>
        <h2>{`${marca} ${nome}`}</h2>
        <img
          src={noImage}
          alt={nome}
          style={{ width: '20em ' }}
        />
      </div>
      <div className='car-infos'>
        <p>{`Descrição: ${descricao}`}</p>
        <p>{`Ano: ${anoFabricacao}`}</p>
      </div>
      <div className='buttons'>
        <button
          type='button'
          onClick={() => history.push(`/cars/${params.id}/edit`)}
          className='edit-button'
        >
          Editar
        </button>
        <button
          type='button'
          onClick={() => history.push('/cars')}
        >
          Voltar
        </button>
      </div>
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
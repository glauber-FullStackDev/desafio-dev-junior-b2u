import React from 'react'
import PropTypes from 'prop-types'

function EditCarForm({ setShowEditForm }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <form>
        <label htmlFor='nome'>
          Nome do carro:
          <input
            type='text'
            name='nome'
          />
        </label>
        <label htmlFor='marca'>
          Marca do carro:
          <input
            type='text'
            name='marca'
          />
        </label>
        <label htmlFor='ano-fabricacao'>
          Ano de fabricação:
          <input
            type='text'
            name='ano-fabricacao'
          />
        </label>
        <label htmlFor='descricao'>
          Descrição:
          <textarea
            name='descricao'
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

EditCarForm.propTypes = {
  setShowEditForm: PropTypes.func.isRequired,
}

export default EditCarForm
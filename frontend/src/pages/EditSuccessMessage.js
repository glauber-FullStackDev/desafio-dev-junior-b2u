import React from 'react'
import { useHistory } from 'react-router-dom'

function EditSuccessMessage() {
  const history = useHistory()

  const handleClick = () => {
    history.push('/cars');
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        padding: '10em 0 0',
      }}
    >
      <span>
        Carro alterado com sucesso!
      </span>
      <br />
      <button type='button' onClick={handleClick}>
        Voltar
      </button>
    </div>
  )
}

export default EditSuccessMessage
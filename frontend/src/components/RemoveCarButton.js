import React from 'react'

function RemoveCarButton({ id }) {
  const handleClick = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
    try {
      const response = await fetch(`http://localhost/carros/${id}`, requestOptions)
      return response;
    } catch (error) {
      return error.message;
    }
  };

  return (
    <>
      <button
        type='button'
        name='remove'
        style={{
          display: 'flex',
          marginLeft: 'auto',
        }}
        onClick={handleClick}
      >
        Remove
      </button>
    </>
  )
}

export default RemoveCarButton
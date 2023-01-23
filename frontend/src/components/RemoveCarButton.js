import React from 'react'
import deleteFetch from '../utils/deleteFetch'

function RemoveCarButton({ id }) {
  const handleClick = async () => {
    await deleteFetch(id);
    window.location.reload(true);
  };

  return (
    <>
      <button
        type='button'
        name='remove'
        onClick={handleClick}
      >
        Remove
      </button>
    </>
  )
}

export default RemoveCarButton
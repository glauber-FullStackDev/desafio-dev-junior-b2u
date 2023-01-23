import React from 'react'
import deleteFetch from '../utils/deleteFetch'

function RemoveCarButton({ id }) {
  // not working...
  const handleClick = async () => {
    await deleteFetch(id);
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
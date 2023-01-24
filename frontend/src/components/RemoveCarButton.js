import React from 'react'
import deleteFetch from '../utils/deleteFetch'
import removeIcon from '../image/remove.png';

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
        <img src={removeIcon} alt='remove icon' />
      </button>
    </>
  )
}

export default RemoveCarButton
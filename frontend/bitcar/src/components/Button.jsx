import React from 'react'

const Button = ({text,callback}) => {
  return (
    <button className='bg-primary-dark text-gray-twelve rounded-full p-3' onClick={()=>callback(true)}>
        {text}
    </button>
  )
}

export default Button
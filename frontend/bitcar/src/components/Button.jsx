import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-primary-dark text-gray-twelve rounded-full p-3'>
        {text}
    </button>
  )
}

export default Button
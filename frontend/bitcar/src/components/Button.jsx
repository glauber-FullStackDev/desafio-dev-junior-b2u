import React from 'react'

const Button = ({text,callback,type}) => {
  return (
    <button className='bg-primary-dark text-gray-twelve rounded-full p-3' type={type ? type : 'button'} onClick={()=>callback ? callback(true) : ''}>
        {text}
    </button>
  )
}

export default Button
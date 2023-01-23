import React from 'react'

const Button = ({text,callback,type}) => {
  return (
    <button className='bg-primary-dark text-gray-twelve transition border border-primary-dark rounded-full p-3 hover:text-primary-dark hover:bg-gray-twelve' type={type ? type : 'button'} onClick={()=>callback ? callback(true) : ''}>
        {text}
    </button>
  )
}

export default Button
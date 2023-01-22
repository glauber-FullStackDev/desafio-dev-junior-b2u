import React from 'react'
import Button from './Button'

const FormRegisterUser = () => {
  return (
    <>
        
        <form className='flex flex-col gap-y-2 bg-white p-4 items-center sm:items-start'>
        <h2 className='mb-8 text-2xl text-center sm:text-left sm:text-3xl font-bold '>Criar usuário</h2>
                      <label className='font-medium text-gray-three text-left'>Nome</label>
                      <input type='text' placeholder='Satoshi Nakamoto' className='placeholder-gray-six bg-gray-eleven w-1/2 p-2 outline-none border rounded focus:border-primary-dark mb-2 text-gray-two'/>
                    <label className='font-medium text-gray-three'>Email</label>
                    <input type='text' placeholder='satoshi@bitcoin.com' className='placeholder-gray-six bg-gray-eleven p-2 w-1/2 outline-none border rounded focus:border-primary-dark mb-2  text-gray-two'/>
                    <label className='font-medium text-gray-three'>Telefone</label>
                    <input type='text' placeholder='(91) 31415-9227' className='placeholder-gray-six bg-gray-eleven p-2  w-1/2 outline-none border rounded focus:border-primary-dark mb-2  text-gray-two'/>
                    <div className='mt-4 justify-center sm:justify-start items-center flex'>
                    
                    <Button text={'Criar usuário'} />
                    </div>
                  </form>

    </>
  )
}

export default FormRegisterUser
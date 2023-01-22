
import Button from './Button'
import { ItemContext } from '../contexts/ItemContext'
import { useContext } from 'react'
import { useEffect } from 'react';
import api from '../services/api'
import {useForm} from 'react-hook-form'
const ModalEditUserItem = ({modal,setModal}) => {
    
  const {userId} = useContext(ItemContext);
  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    setModal(false);
    api.patch('/users/' + userId,data)
    .then(res=>res)
    .catch(err=>console.log(err))
  }


  return (
    <>
      {modal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative p-4 flex flex-col w-full bg-gray-twelve ">
                <div className="flex flex-col p-5 gap-y-2">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setModal(false)}
                  >
                    <div className="flex justify-end">
                    <h2 className="text-gray-two opacity-7 h-6 w-6 text-xl bg-gray-400 py-0 rounded-full">
                      x
                    </h2>
                    </div>
                  </button>
                  <h2 className='text-center mt-4 font-semibold text-2xl text-gray-three'>
                    Editar Usuário
                  </h2>
                  <form className='flex flex-col gap-y-2' onSubmit={handleSubmit(onSubmitFunction)}>
                      <label className='font-medium text-gray-three'>Nome</label>
                      <input  {...register('name')} type='text' placeholder='Satoshi Nakamoto' className='bg-gray-eleven p-2 outline-none border rounded focus:border-primary-dark mb-2 text-gray-two'/>
                    <label className='font-medium text-gray-three'>Email</label>
                    <input {...register('email')} type='text' placeholder='satoshi@bitcoin.com' className='bg-gray-eleven p-2 outline-none border rounded focus:border-primary-dark mb-2  text-gray-two'/>
                    <label className='font-medium text-gray-three'>Telefone</label>
                    <input {...register('tel')} type='text' placeholder='(91) 31415-9227' className='bg-gray-eleven p-2 outline-none border rounded focus:border-primary-dark mb-2  text-gray-two'/>
                    <div className='mt-4 justify-center items-center flex'>
                    <button type='submit'>      
                    <Button text={'Editar usuário'} />
                    </button>

                    </div>
                    

                  </form>
                         
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ModalEditUserItem
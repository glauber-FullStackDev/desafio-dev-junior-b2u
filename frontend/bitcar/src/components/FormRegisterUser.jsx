import React from 'react'
import Button from './Button'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from '../services/api'
import { toast } from 'react-toastify'

const FormRegisterUser = () => {
  const schema = yup.object({
    name:yup.string().required(),
    email:yup.string().required(),
    tel:yup.string().required(),
  }).required()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmitFunction = (data) => {
    api.post('/users',data)
    .then(res=>toast.success('Usuário adicionado'))
    .catch(err=>toast.error('Email/Telefone já existentes'))
  }
  return (
    <>
        
        <form  onSubmit={handleSubmit(onSubmitFunction)} className='flex flex-col gap-y-2 mt-16 bg-white p-4 items-center sm:items-start'>
        <h2 className='mb-8 text-2xl text-center sm:text-left sm:text-3xl font-bold '>Criar Usuário</h2>
                      <label className='font-medium text-gray-three text-left'>Nome</label>
                      <input {...register('name')} type='text' placeholder='Satoshi Nakamoto' className='bg-gray-eleven w-1/2 p-2 outline-none border rounded focus:border-primary-dark mb-2 placeholder-gray-six text-gray-two text-[14px]'/>
                      <p className='text-sm text-[#8F1F1F]'>{errors.name ? 'O nome do usuário é obrigatório' : ''}</p>
                    <label className='font-medium text-gray-three'>Email</label>
                    <input {...register('email')}  type='text' placeholder='satoshi@bitcoin.com' className='bg-gray-eleven p-2 w-1/2 outline-none border rounded focus:border-primary-dark mb-2 text-[14px] placeholder-gray-six text-gray-two'/>
                    <p className='text-sm text-[#8F1F1F]'>{errors.email ? 'O email é obrigatório' : ''}</p>
                    <label className='font-medium text-gray-three'>Telefone</label>
                    <input  {...register('tel')}  type='text' placeholder='(91)31415-9227' className='bg-gray-eleven p-2  w-1/2 outline-none border rounded focus:border-primary-dark mb-2 placeholder-gray-six text-[14px] text-gray-two'/>
                    <p className='text-sm text-[#8F1F1F]'>{errors.tel ? 'O telefone é obrigatório' : ''}</p>
                    <div className='mt-4 justify-center sm:justify-start items-center flex'>
                    <Button text={'Criar usuário'} type={'submit'}/>
                    </div>
                  </form>

    </>
  )
}

export default FormRegisterUser
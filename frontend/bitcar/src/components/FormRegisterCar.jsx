import React from 'react'
import Button from './Button'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from '../../services/api'

const FormRegisterCar = () => {



  return (
    <>
        
        <form className='flex flex-col gap-y-2 mt-16 bg-white p-4 items-center sm:items-start'>
        <h2 className='mb-8 text-2xl text-center sm:text-left sm:text-3xl font-bold '>Criar carro</h2>
                      <label className='font-medium text-gray-three text-left'>Nome</label>
                      <input type='text' placeholder='Prisma' className='bg-gray-eleven w-1/2 p-2 outline-none border rounded focus:border-primary-dark mb-2 placeholder-gray-six text-gray-two text-[14px]'/>
                    <label className='font-medium text-gray-three'>Marca</label>
                    <input type='text' placeholder='Chevrolet' className='bg-gray-eleven p-2 w-1/2 outline-none border rounded focus:border-primary-dark mb-2 text-[14px] placeholder-gray-six text-gray-two'/>
                    <label className='font-medium text-gray-three'>Ano de fabricação</label>
                    <input type='text' placeholder='2018' className='bg-gray-eleven p-2  w-1/2 outline-none border rounded focus:border-primary-dark mb-2 placeholder-gray-six text-[14px] text-gray-two'/>
                    <label className='text-gray-three font-medium'>Descrição</label>
                    <textarea placeholder=' Eficiente, oferece uma experiência bem melhor de condução do que a dos concorrentes com câmbio automatizado' className='resize-none border placeholder-gray-six focus:border-primary-dark outline-none w-1/2 rounded p-2 h-20 text-[14px] bg-gray-eleven'></textarea>
                    <label className='font-medium'>Dono</label>
                    <select className='w-1/2 p-2 border outline-none rounded overflow-y-scroll text-[14px] focus:border-primary-dark'>
                        <option className='text-gray-two'>
                            Satoshi Nakamoto
                        </option>
                        <option className='text-gray-two'>
                            Satoshi Nakamoto
                        </option>
                    </select>
                    <div className='mt-4 justify-center sm:justify-start items-center flex'>

                    <Button text={'Criar carro'} />
                    </div>
                  </form>

    </>
  )
}

export default FormRegisterCar
import React from 'react'
import LogoImg from '../assets/logo.svg'
import {HiPlusCircle} from 'react-icons/hi'
import {FaCar,FaUser} from 'react-icons/fa'
import Button from './Button'


const Header = () => {

  return (
    <>
    <div className='bg-gray-twelve p-4 flex justify-between items-center'>
        <img src={LogoImg}/>
        
        <HiPlusCircle className='h-6 w-6 text-primary-dark block sm:hidden'/>
        <div className='hidden sm:flex space-x-20'>
        <h2 className='font-bold text-primary-dark cursor-pointer'>
            Carros
        </h2>
        <h2 className='cursor-pointer'>
            Usuários
        </h2>
        </div>
        <div className='hidden sm:flex'>
        <Button text={'Adicionar carro'} className='bg-primary-dark cursor-pointer'/>
        </div>
    </div>
    <div className=' p-2 flex sm:hidden justify-center gap-x-12 mt-4'>
        <div className='flex items-center gap-x-2'>
        <FaCar color='#0817FF'/>
        <h2 className='text-primary-dark'>Carros</h2>
        </div>
        <div className='flex items-center gap-x-2'>
        <FaUser color='#616161'/>
        <h2 className='text-gray-six'>Usuários</h2>
        </div>
    </div>
    </>
  )
}

export default Header
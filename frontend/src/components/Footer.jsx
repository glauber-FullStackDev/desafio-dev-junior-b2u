import React from 'react'
import LogoImg from '../assets/logo.svg'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-gray-twelve p-4 mt-16 text-center flex flex-col gap-y-8 sm:flex-row justify-around'>
        <div className='flex justify-center'>
        <img src={LogoImg} className='w-56' />
        </div>
        <div className='sm:flex justify-center items-center gap-x-8'> 
            <ul className='flex flex-col gap-y-2'>
                <h2 className='decoration-primary-light underline underline-offset-4 text-[20px] sm:text-xl'>Carros</h2>
                <div className='flex flex-col'>
                <li className='text-gray-three text-[14px] sm:text-[16px] cursor-pointer'>
                    Recentemente Adicionados
                </li>
                <li className='text-gray-three text-[14px] sm:text-[16px] cursor-pointer'>
                    Mais novos
                </li>
                </div>
            </ul>
            <ul className='flex flex-col gap-y-2'>
                <h2 className='decoration-primary-light underline underline-offset-4 text-[20px] sm:text-xl'>Usuários</h2>
                <div className='flex flex-col'>
                <li className='text-gray-three text-[14px] sm:text-[16px] cursor-pointer'>
                    Todos os usuários
                </li>
                <li className='text-gray-three text-[14px] sm:text-[16px] cursor-pointer'>
                    Clientes fiéis
                </li>
                </div>
            </ul>
        </div>
       
        <div className='flex flex-col gap-y-4'>
        <h2 className='text-primary-dark'>
            adrieldev@outlook.com
        </h2>

        <div className='flex gap-x-8 justify-center mb-8'>
            <a href='https://www.linkedin.com/in/adrieldev/'>
            <FaLinkedin className='w-8 h-8'/>
            </a>   
            <a href='https://github.com/adrielldev'>
            <FaGithub className='w-8 h-8'/>
            </a> 
            
            
        </div>

        </div>
        



    </div>
  )
}

export default Footer
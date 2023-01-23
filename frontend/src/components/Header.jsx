import React from 'react'
import LogoImg from '../assets/logo.svg'
import {HiPlusCircle} from 'react-icons/hi'
import {FaCar,FaUser} from 'react-icons/fa'
import Button from './Button'
import {Link, useLocation} from 'react-router-dom'


const Header = () => {
  let location = useLocation()

  return (
    <>
    <div className='bg-gray-twelve p-4 flex justify-between items-center'>
      <Link to='/'>
      <img src={LogoImg}/>
      </Link>
        
        <Link className='block sm:hidden' to='/register'>
        <HiPlusCircle className='h-6 w-6 text-primary-dark block sm:hidden'/>
        </Link>
        
        <div className='hidden sm:flex space-x-20'>
          <Link to='/'>
          {location.pathname == '/' ? 
        <h2 className='font-bold text-primary-dark cursor-pointer hover:underline decoration-primary-dark underline-offset-4'>
            Carros
        </h2>
        :
        <h2 className=' cursor-pointer hover:underline decoration-gray-three underline-offset-4'>
            Carros
        </h2>
        }
                    
        </Link>
        
        <Link to='/users'>
        {location.pathname == '/users' ? <h2 className='cursor-pointer font-bold text-primary-dark hover:underline decoration-primary-dark underline-offset-4'>
            Usuários
        </h2> :
        <h2 className='cursor-pointer hover:underline decoration-gray-three underline-offset-4 '>
        Usuários
    </h2>
        
        }
        

        </Link>
        
        </div>
        <div className='hidden sm:flex'>
          <Link to='/register'><Button text={'Adicionar carro'} className='bg-primary-dark cursor-pointer'/></Link>
        
        </div>
    </div>
    <div className=' p-2 flex sm:hidden justify-center gap-x-12 mt-4'>
    <Link to='/'>
      {location.pathname == '/' ? <div className='flex items-center gap-x-2'>
        <FaCar color='#0817FF'/>
        <h2 className='text-primary-dark'>Carros</h2>
        </div> : <div className='flex items-center gap-x-2'>
        <FaCar color='#616161'/>
        <h2 className='text-gray-six'>Carros</h2>
        </div>}
        
        </Link>
        <Link to='/users'>
          {location.pathname == '/users' ?  <div className='flex items-center gap-x-2'>
        <FaUser color='#0817ff'/>
        <h2 className='text-primary-dark'>Usuários</h2>
        </div> : <div className='flex items-center gap-x-2'>
        <FaUser color='#616161'/>
        <h2 className='text-gray-six'>Usuários</h2>
        </div> }
        
                  
        </Link>
    </div>
    </>
  )
}

export default Header
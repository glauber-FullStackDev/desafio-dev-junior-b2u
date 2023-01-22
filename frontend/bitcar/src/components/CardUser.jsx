import React from 'react'
import {FaCar,FaEllipsisH, FaUser,FaMailBulk,FaPhone} from 'react-icons/fa'
import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import ModalEditDeleteUserItem from './ModalEditDeleteUserItem'
import ModalCarsItem from './ModalCarsItem'

const CardUser = () => {
   const {modalEditDeleteUser,setModalEditDeleteUser,modalCars,setModalCars} = useContext(ModalContext)
  return (
    <div className='bg-gray-three w-80 p-4 h-fit flex flex-col gap-y-4 text-white border rounded'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-x-2 justify-center'>
            <FaUser color='#fff'/>
            <h2 className='text-white text-[20px]'>Satoshi Nakamoto</h2>
        </div>
            <FaEllipsisH color='#A8A8A8' className='cursor-pointer' onClick={()=>{setModalEditDeleteUser(true)}} />
        </div>
        <div className='flex items-center gap-x-2'>
            <FaMailBulk color='#7A7A7A '/>
            <h2 className='text-gray-seven text-[18px]' >satoshi@bitcoin.com</h2>
        </div>
        <div className='flex items-center gap-x-2'>
            <FaPhone color='#7A7A7A'/>
            <h2 className='text-gray-seven text-[18px]'>(91)31415-9227</h2>
        </div>
        <div className='flex items-center gap-x-4'>
            <div className='flex gap-x-2'>
            <FaCar color='#8f8f8f'/>
            <span className='text-gray-eight text-[10px]'>3</span>
            </div>
  
            <h2 className='text-[14px] text-gray-eight underline underline-offset-4 decoration-gray-eight cursor-pointer' onClick={()=>setModalCars(true)}>Ver carros</h2>
        </div>
        <ModalEditDeleteUserItem modal={modalEditDeleteUser} setModal={setModalEditDeleteUser}/>
        <ModalCarsItem modal={modalCars} setModal={setModalCars}/>
    </div>
  )
}

export default CardUser
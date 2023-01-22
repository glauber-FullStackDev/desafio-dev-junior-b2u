import React from 'react'
import {FaCar,FaEllipsisH, FaUser} from 'react-icons/fa'
import ModalEditDeleteItem from './ModalEditDeleteItem'
import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import ModalUserItem from './ModalUserItem'

const CardCar = () => {
    const {modalEditDelete,setModalEditDelete,modalUser,setModalUser} = useContext(ModalContext);
    const user = {
        name:'Satoshi Nakamoto',
        email:'satoshi@bitcoin.com',
        tel:'(91)31415-9227',
        cars:[
            {
                name:'Prisma',
                marca:'Crevrolet',
                ano_fabri:'2018'
            },
            {
                name:'Prisma',
                marca:'Crevrolet',
                ano_fabri:'2018'
            },
            {
                name:'Prisma',
                marca:'Crevrolet',
                ano_fabri:'2018'
            }
        ]
    }

  return (
    <div className='bg-gray-three w-80 p-4 flex flex-col gap-y-4 text-white border rounded'>
        <div className='flex justify-between'>
            <div>

            </div>
        <div className='flex items-center gap-x-2 justify-center'>
            <FaCar color='#fff'/>
            <h2 className='text-white'>Prisma</h2>
        </div>
            <div className='static'>
            <FaEllipsisH color='#A8A8A8' className='cursor-pointer' onClick={()=>setModalEditDelete(!modalEditDelete)}/>
            </div>
            
        </div>
        <div className='flex justify-between'>
            <h2 className='text-[16px] text-gray-eight'>Chevrolet</h2>
            <h2 className='text-[16px] text-gray-eight'>2018</h2>
        </div>
        <div>
            <p className='text-[14px] text-gray-seven'>
            Eficiente, oferece
            uma experiência bem melhor de condução do
            que a dos concorrentes com câmbio automatizado
            </p>
        </div>
        <div className='flex items-center gap-x-4'>
            <FaUser color='#8f8f8f'/>
            <h2 className='text-[14px] text-gray-eight underline underline-offset-4 decoration-gray-eight cursor-pointer' onClick={()=>setModalUser(!modalUser)}>Satoshi Nakamoto</h2>
        </div>
        <ModalEditDeleteItem modal={modalEditDelete} setModal={setModalEditDelete}/>
        <ModalUserItem modal={modalUser} setModal={setModalUser} user={user}/>
        

    </div>
  )
}

export default CardCar
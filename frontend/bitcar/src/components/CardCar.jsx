import React from 'react'
import {FaCar,FaEllipsisH, FaUser} from 'react-icons/fa'
import ModalEditDeleteItem from './ModalEditDeleteItem'
import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import ModalUserItem from './ModalUserItem'
import { ItemContext } from '../contexts/ItemContext'

const CardCar = ({name,marca,ano_fabri,descricao,userId,user,id}) => {
    const {modalEditDelete,setModalEditDelete,modalUser,setModalUser} = useContext(ModalContext);
    const {setCarId,setUserId} = useContext(ItemContext)
  return (
    <div className='bg-gray-three w-80 p-4 flex flex-col gap-y-4 text-white border rounded'>
        <div className='flex justify-between'>
            <div>

            </div>
        <div className='flex items-center gap-x-2 justify-center'>
            <FaCar color='#fff'/>
            <h2 className='text-white'>{name}</h2>
        </div>
            <div className='static'>
            <FaEllipsisH color='#A8A8A8' className='cursor-pointer' onClick={()=>{setModalEditDelete(true);setCarId(id)}}/>
            </div>
            
        </div>
        <div className='flex justify-between'>
            <h2 className='text-[16px] text-gray-eight'>{marca}</h2>
            <h2 className='text-[16px] text-gray-eight'>{ano_fabri}</h2>
        </div>
        <div>
            <p className='text-[14px] text-gray-seven'>
            {descricao}
            </p>
        </div>
        <div className='flex items-center gap-x-4'>
            <FaUser color='#8f8f8f'/>
            <h2 className='text-[14px] text-gray-eight hover:text-primary-light hover:decoration-primary-light underline underline-offset-4 decoration-gray-eight cursor-pointer' onClick={()=>{{setModalUser(true);setUserId(userId)}}}>{user.name}</h2>
        </div>
        <ModalEditDeleteItem modal={modalEditDelete} setModal={setModalEditDelete}/>
        <ModalUserItem modal={modalUser} setModal={setModalUser}/>
        

    </div>
  )
}

export default CardCar
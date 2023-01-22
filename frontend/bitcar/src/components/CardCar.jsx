import React from 'react'
import {FaCar,FaEllipsisH, FaUser} from 'react-icons/fa'
import { useState } from 'react'

const CardCar = () => {

    const [menuActive,setMenuActive] = useState(false)
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
            <FaEllipsisH color='#A8A8A8' className='cursor-pointer' onClick={()=>setMenuActive(!menuActive)}/>
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
            <h2 className='text-[14px] text-gray-eight underline underline-offset-4 decoration-gray-eight cursor-pointer'>Satoshi Nakamoto</h2>
        </div>

        

    </div>
  )
}

export default CardCar
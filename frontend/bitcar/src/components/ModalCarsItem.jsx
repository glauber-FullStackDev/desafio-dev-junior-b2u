import React from 'react'
import { FaCar } from 'react-icons/fa'
import {HiPlusCircle} from 'react-icons/hi'

const ModalCarsItem = ({modal,setModal}) => {
    
     const cars =[
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

  return (
    <>
      {modal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl text-gray-one">
              <div className="border-0 rounded-lg shadow-lg relative p-4 flex flex-col w-full bg-gray-twelve ">
                <div className="flex flex-col p-5 gap-y-2">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setModal(false)}
                  >
                    <div className="flex justify-end w-52 ">
                       
                    <h2 className="text-gray-two opacity-7 h-6 w-6 text-xl bg-gray-400 py-0 rounded-full">
                      x
                    </h2>
                    </div>
                  </button>
                  <h2 className='font-medium text-xl '>Carros</h2>
                  <div className='flex items-center gap-x-2 mt-2'>
                    <HiPlusCircle color='#0817FF'  onClick={()=>setModal(false)}/>
                    <h2 className='text-gray-five'>Adicionar novo carro</h2>
                  </div>
                </div>
                <div className='flex flex-col h-20 overflow-y-scroll '>
                  {cars.map(car=>(
                    <div className='flex flex-row bg-gray-three text-gray-twelve items-center justify-between p-4'>
                      <FaCar/>
                      <h2>{car.name}</h2>
                      <h2>{car.marca}</h2>
                      <h2>{car.ano_fabri}</h2>
                      
                      </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ModalCarsItem
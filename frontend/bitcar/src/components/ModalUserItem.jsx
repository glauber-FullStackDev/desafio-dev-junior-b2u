import React from 'react'
import { useState } from 'react'
import { FaPlusCircle,FaCar, FaUser, FaMailBulk, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import api from '../services/api'
const ModalUserItem = ({modal,setModal,userId}) => {
    const [user,setUser] = useState({
      name:'',
      tel:'',
      email:'',
      carros:[]
    })
    api.get('/users/' + userId)
    .then(res=>setUser(res.data))

  return (
    <>
      {modal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative p-4 flex flex-col w-full bg-gray-twelve ">
                <div className="flex flex-col p-5 gap-y-2">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setModal(false)}
                  >
                    <div className="flex justify-end w-52">
                    <h2 className="text-gray-two opacity-7 h-6 w-6 text-xl bg-gray-400 py-0 rounded-full">
                      x
                    </h2>
                    </div>
                  </button>
                  <div className='flex gap-x-2 mb-2 items-center mt-4'>
                    <FaUser color='#A8A8A8'/>
                    <h2 className='text-gray-one font-medium'>{user.name}</h2>
                  </div>
                  <div className='flex gap-x-2 mb-2 items-center'>
                    <FaMailBulk color='#A8A8A8'/>
                    <h2 className='text-gray-one font-medium'>{user.email}</h2>
                  </div>
                  <div className='flex gap-x-2 mb-2 items-center'>
                    <FaPhone color='#A8A8A8'/>
                    <h2 className='text-gray-one font-medium'>{user.tel}</h2>
                  </div>
                  <div className='flex justify-between flex-row items-center mb-4 mt-4'>
                    <h2 className='text-gray-one'>Carros do usuário</h2> 
                    <Link to='/register'>
                    <FaPlusCircle color='#0817FF'/>
                    </Link>
                    
                  </div>          
                </div>
                <div className='flex gap-x-4 w-56 overflow-x-scroll'>
                  {user.carros.map(car=>(

                   
                        <div className='bg-gray-three rounded p-2' key={Math.random()}>
                          <div className='flex items-center gap-x-2'>
                              <FaCar/>
                              <h2>{car.name}</h2>
                          </div>
                          <div className='flex justify-between gap-x-2'>
                            <h2>{car.marca}</h2>
                            <h2>{car.ano_fabri}</h2>
                          </div>
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

export default ModalUserItem
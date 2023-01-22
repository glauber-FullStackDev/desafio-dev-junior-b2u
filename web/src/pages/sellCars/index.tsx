import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function SellCars() {
  return (
    <div
      className='container flex flex-col gap-8 grow'
    >
      <div
        className='shadow rounded-md
        hidden 
        w-full h-10
        bg-white text-blue-500
        md:flex justify-start gap-6 items-center px-6
        '
      >
        <Link to="/sell/add">
          Adicionar Carro para Venda
        </Link>
        <Link to="/sell">
          Gerenciar Carros
        </Link>
      </div>
      <div
        className='bg-white shadow-md grow rounded-md p-6'
      >
        <Outlet/>
      </div>
    </div>
  )
}

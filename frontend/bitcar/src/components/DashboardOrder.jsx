import React from 'react'

const DashboardOrder = () => {
  return (
    <>
    <div className='text-center sm:text-left sm:flex p-4 gap-x-8'>
        <h2>Ordenar por</h2>
        <select className='p-2'>
            <option>
                Recentemente adicionados
            </option>
            <option>
                Mais novos
            </option>
        </select>
    </div>

    </>
    

  )
}

export default DashboardOrder
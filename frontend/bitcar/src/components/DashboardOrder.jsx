import React from 'react'

const DashboardOrder = ({opcoes}) => {
 
  return (
    <>
    <div className='text-center sm:text-left sm:flex-row flex-col flex p-4 gap-x-8 gap-y-4'>
        <h2 className='mt-2 text-gray-4 text-base sm:text-[20px] text-gray-four'>Ordenar por</h2>
        <div className='flex justify-center'>
        <select className='w-100 p-2 text-[12px] sm:text-[18px]'>
            {opcoes.map(opcao=>(
              <option key={opcao}>
                {opcao}
              </option>
            ))}
        </select>

        </div>
        
    </div>

    </>
    

  )
}

export default DashboardOrder
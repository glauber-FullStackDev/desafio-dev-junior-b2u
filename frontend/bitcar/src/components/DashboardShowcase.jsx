import React from 'react'
import CardCar from './CardCar'
import CardUser from './CardUser'

const DashboardShowcase = () => {
  return (
    <div className='bg-gray-twelve overflow-y-scroll justify-center h-80 w-full mt-16 flex flex-wrap gap-4 p-4'>
      <CardUser/>
      <CardUser/>
      <CardUser/>
      <CardUser/>


    </div>
  )
}

export default DashboardShowcase
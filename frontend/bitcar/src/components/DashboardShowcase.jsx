import React from 'react'
import CardCar from './CardCar'

const DashboardShowcase = () => {
  return (
    <div className='bg-gray-twelve overflow-y-scroll h-80 w-full mt-16 flex flex-wrap justify-center gap-4 p-4'>
      <CardCar/>
      <CardCar/>
      <CardCar/>
      <CardCar/>
      <CardCar/>

    </div>
  )
}

export default DashboardShowcase
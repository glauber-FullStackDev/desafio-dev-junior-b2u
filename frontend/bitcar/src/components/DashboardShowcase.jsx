import React from 'react'
import CardCar from './CardCar'
import CardUser from './CardUser'

const DashboardShowcase = ({Card}) => {
  return (
    <div className='bg-gray-twelve overflow-y-scroll justify-center h-80 w-full mt-16 flex flex-wrap gap-4 p-4'>
      <Card/>


    </div>
  )
}

export default DashboardShowcase
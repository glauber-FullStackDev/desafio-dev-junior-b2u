import React, { useEffect, useState } from 'react'
import BuyCarCard from '../../components/BuyCarCard'
import api from '../../config/apiConfig'
interface Car {
  id: string
  name: string
  brand: string
  fabricationDate: string
  description: string
  ownerId: string
  imageUrl: string
}


export default function BuyCars() {
  const [cars, setCars] = useState<Car[]>([] as Car[])

  useEffect(() => {
    api.get('car/findAll').then(({data}) => setCars(data))
  }, [])
  return (
    <div
      className='container flex flex-wrap gap-6 w-full bg-white rounded-md shadow-md p-4'
    >
      {cars?.map((car: Car, i)=> {
        return (
          <BuyCarCard
            key={new Date().getTime() * i}
            id={car.id}
            name={car.name}
            brand={car.brand}
            description={car.description}
            fabricationDate={car.fabricationDate}
            imageUrl={car.imageUrl}
            onClick={(id) => console.log(id)}
          />
        )
      })}
    </div>
  )
}

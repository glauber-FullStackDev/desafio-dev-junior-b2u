import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../config/apiConfig'

interface Car {
  id: string
  name: string
  brand: string
  fabricationDate: string
  description: string
  ownerId: string
  owner: {
    name: string
    phoneNumber: string
    email: string
    imageUrl: string
  }
  imageUrl: string
}

export default function CarDetails() {
  const [car, setCar] = useState<Car>({}as Car)
  const {id} = useParams()

  useEffect(() => {
    api.get(`car/find/${id}`).then(({data: {car}}) => setCar(car))
  }, [])
  console.log(car)
  return (
    <div
      className='
      container bg-white
      rounded
      flex flex-col items-center gap-4 p-4
      '
    >
      <div
        className='
        flex justify-center
        w-[500px] 
        gap-4 uppercase 
        rounded'
      >
        <h3>
          {car?.brand}
        </h3>
        <h3>
          {car?.name}
        </h3>
        <h3>
          {car?.fabricationDate?.split('/')[2]}
        </h3>
      </div>

      <div
        className='
        flex justify-center
        w-[500px] 
        gap-4 uppercase 
        rounded'
      >
        {car?.description}
      </div>

      <div
        className='
        max-w-[500px] max-h-[500px]
        flex items-center justify-center border        
        '
      >
        <img 
          className='object-cover w-full h-full'
          src={car?.imageUrl} 
          alt="Imagem do carro que será vendido."
        />
      </div>

      <div
        className='
        flex justify-center flex-col items-center
        w-[500px] 
        gap-4 
        rounded'
      >
        <h3
          className='uppercase'
        >
          Informações do Dono
        </h3>
        <p>{`Telefone: ${car?.owner?.phoneNumber}`}</p>
        <p>{`Email: ${car?.owner?.email}`}</p>
      </div>

     

      

    </div>
  )
}

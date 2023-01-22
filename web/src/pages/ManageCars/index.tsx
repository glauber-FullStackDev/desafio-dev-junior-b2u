import { Alert, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import api from '../../config/apiConfig'
import ManageCarCard from '../../components/manageCarCard';
import { getItemFromLocalStorage } from '../../services/localStorage';
import { Auth } from '../../helpers/interfaces/localStorage';
interface Car {
  id: string
  name: string
  brand: string
  fabricationDate: string
  description: string
  ownerId: string
  imageUrl: string
}

export default function ManageCars() {
  const [cars, setCars] = useState<Car[]>([] as Car[])
  const [open, setOpen] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
  }
    setOpen(false);
  };

  useEffect(() => {
    const authOnLocalStorage = getItemFromLocalStorage('BitMotors_user_token') as Auth || {};
    console.log(authOnLocalStorage)
    api.get(`car/findByOwner/${authOnLocalStorage.id}`).then(({data}) => setCars(data))
  }, [])

  const handleRemoveCar = (id: string) => {
    api.delete(`car/delete/${id}`).then(({status}) => {
      if(status === 200) {
        setOpen(true)
      }
    })
    const carsWithoutCarDeleted = cars.filter(({id: carId}) => id !== carId)
    setCars(carsWithoutCarDeleted)
    console.log(id)
  }
  return (
    <div
      className='flex flex-wrap gap-5'
    >
      {
        cars?.map((car: Car, i) => {
          return (
            <ManageCarCard
              key={new Date().getTime() * i}
              id={car.id}
              name={car.name}
              brand={car.brand}
              description={car.description}
              fabricationDate={car.fabricationDate}
              imageUrl={car.imageUrl}
              onClick={(id) => handleRemoveCar(id)}
            />
          )
      })
    }

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Carro removido!
        </Alert>
      </Snackbar>
    </div>
  )
}

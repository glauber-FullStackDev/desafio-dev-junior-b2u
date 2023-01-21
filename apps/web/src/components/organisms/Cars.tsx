import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { Car } from '@/lib/types'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const Cars = () => {
  const [carsList, setCarsList] = useState<Array<Car>>([])
  const { data, status } = useQuery<Array<Car>>(
    ['cars'],
    async () => {
      const response = await fetch('http://localhost:3001/cars')
      const cars = await response.json()
      setCarsList(cars)
      return cars
    },
    {
      refetchOnWindowFocus: false,
    },
  )

  const { mutate: deleteCar } = useMutation(async (id: string) => {
    await fetch(`http://localhost:3001/car/${id}`, { method: 'DELETE' })
    // refetch the cars after deletion
    const response = await fetch('http://localhost:3001/cars')
    const carsAfterDeletion = await response.json()
    setCarsList(carsAfterDeletion)
  })

  const handleDelete = useCallback(
    (id: string) => {
      deleteCar(id)
    },
    [deleteCar],
  )

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Model Year
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {carsList?.map(car => (
            <tr key={car.id} className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {car.name}
              </th>
              <td className="px-6 py-4">{car.brand}</td>
              <td className="px-6 py-4">{car.model_year}</td>
              <td className="px-6 py-4 flex space-x-4">
                <Link
                  to={`/sell/${car.id}`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="font-medium text-red-600 hover:underline"
                  onClick={() => handleDelete(car.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cars

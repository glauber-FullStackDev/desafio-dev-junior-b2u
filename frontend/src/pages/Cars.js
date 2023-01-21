import React from 'react'
import { Link } from 'react-router-dom';
import CarsCard from '../components/CarsCard';
import cars from '../mock/carsMock';

function Cars() {
  return (
    <>
      {cars.map((car) => (
        <Link to={`/cars/${car.id}`}>
          <CarsCard
            key={car.id}
            name={car.name}
            model={car.model}
            image={car.image}
            owner={car.owner}
          />
        </Link>
      ))}
    </>
  )
}

export default Cars;

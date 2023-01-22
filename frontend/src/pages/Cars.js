import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CarsCard from '../components/CarsCard';
import Loading from '../components/Loading';

function Cars() {
  const [showError, setShowError] = useState('');
  const [allCarsFetched, setAllCarsFetched] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getAllCars = async () => {
      const response = await fetch('http://localhost:3001/carros');
      const data = await response.json();
      if (data.message) return setShowError(data.message);
      if (isMounted) return setAllCarsFetched(data);
    }
    getAllCars()
    return () => { isMounted = false }
  }, [])

  return (
    <>
      {allCarsFetched ? allCarsFetched.map((car) => (
        <Link to={`/cars/${car.id}`}>
          <CarsCard
            key={car.id}
            name={car.name}
            model={car.model}
            image={car.image}
            owner={car.owner}
          />
        </Link>
      )) : <Loading />}
      <span>{showError && showError}</span>
    </>
  )
}

export default Cars;

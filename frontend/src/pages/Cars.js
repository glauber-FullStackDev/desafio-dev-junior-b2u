import React, { useEffect, useState } from 'react'
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
    <div>
      {allCarsFetched ? allCarsFetched.map((car) => (
        <CarsCard
          key={car.id}
          id={car.id}
          nome={car.nome}
          marca={car.marca}
          anoFabricacao={car.anoFabricacao}
          dono={car.dono}
        />
      )) : <Loading />}
      <span>{showError && showError}</span>
    </div>
  )
}

export default Cars;

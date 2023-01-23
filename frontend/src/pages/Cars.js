import React, { useEffect, useState } from 'react'
import CarsCard from '../components/CarsCard';
import getFetch from '../utils/getFetch';

function Cars() {
  const [showError, setShowError] = useState('');
  const [allCarsFetched, setAllCarsFetched] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getAllCars = async () => {
      const response = await getFetch();
      const data = await response.json();
      if (data.message) return setShowError(data.message);
      if (isMounted) return setAllCarsFetched(data);
    }
    getAllCars()
    return () => { isMounted = false }
  }, [])

  return (
    <div>
      <button type='button'>Adicionar Carro</button>
      {allCarsFetched && allCarsFetched.map((car) => (
        <CarsCard
          key={car.id}
          id={car.id}
          nome={car.nome}
          marca={car.marca}
          anoFabricacao={car.anoFabricacao}
          dono={car.dono}
        />
      ))}
      <span>{showError && showError}</span>
    </div>
  )
}

export default Cars;

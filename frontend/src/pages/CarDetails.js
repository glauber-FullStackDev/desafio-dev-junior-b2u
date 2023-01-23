import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import CarDetailsCard from '../components/CarDetailsCard';

function CarDetails() {
  const [carInfos, setCarInfos] = useState();
  const [showMissingCarError, setShowMissingCarError] = useState();

  const { params: { id } } = useRouteMatch();

  useEffect(() => {
    const getCarById = async () => {
      const response = await fetch(`http://localhost:3001/carros/${id}`);
      const car = await response.json();
      if (car.message) {
        return setShowMissingCarError(car.message)
      };
      return setCarInfos(car);
    };
    getCarById()
  }, [id])

  return (
    <div>
      {showMissingCarError && <p>{showMissingCarError}</p>}
      {carInfos && (
        <CarDetailsCard
          nome={carInfos.nome}
          marca={carInfos.marca}
          anoFabricacao={carInfos.anoFabricacao}
          descricao={carInfos.descricao}
          dono={carInfos.dono}
        />
      )}
    </div>
  )
}

export default CarDetails;
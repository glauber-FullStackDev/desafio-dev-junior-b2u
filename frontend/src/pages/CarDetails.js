import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import CarDetailsCard from '../components/CarDetailsCard';
import '../style/CarDetails.style.css';

function CarDetails() {
  const [carInfos, setCarInfos] = useState();

  const { params: { id } } = useRouteMatch();

  useEffect(() => {
    const getCarById = async () => {
      const response = await fetch(`http://localhost:3001/carros/${id}`);
      const car = await response.json();
      return setCarInfos(car);
    };
    getCarById()
  }, [id])

  return (
    <>
      {carInfos && (
        <CarDetailsCard
          nome={carInfos.nome}
          marca={carInfos.marca}
          anoFabricacao={carInfos.anoFabricacao}
          descricao={carInfos.descricao}
          dono={carInfos.dono}
        />
      )}
    </>
  )
}

export default CarDetails;
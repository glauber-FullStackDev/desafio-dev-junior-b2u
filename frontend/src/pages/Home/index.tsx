import React, { useState, useContext, useEffect } from "react";
import { CarContext } from "../../context/CarContext";
import { ICar, ICarContext } from "../../context/types.car";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { cars, getCars } = useContext(CarContext) as ICarContext;
  const navigate = useNavigate();

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      <Button onClick={() => navigate("/add")}>Cadastrar Carro</Button>
      <div className="grid gap-5 md:grid-cols-2">
        {cars.length > 0 ? (
          cars.map((car: ICar, index: number) => (
            <Card
              key={index}
              name={car.name}
              brand={car.brand}
              year={car.year}
              ownerName={car.owner.name}
              ownerEmail={car.owner.email}
              ownerTel={car.owner.tel}
              carId={index}
            />
          ))
        ) : (
          <p className="text-center col-span-2 font-semibold text-gray-700 font-display">
            Nenhum carro cadastrado
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;

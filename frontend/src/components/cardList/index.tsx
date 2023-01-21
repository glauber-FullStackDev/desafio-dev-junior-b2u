import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import getAllCars from "../../services/cars/get-all-cars";
import CardCar from "../card";
import { Container } from "./styles";

const CardList = () => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const response = await getAllCars();
    if (response.error) {
      toast.error(response.error);
    }
    console.log(response);
    setCars(response)
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Container>
      {cars.map((car, index) => (
        <CardCar
          key={index}
          id={car.id} 
          model={car.model}
          year={car.year}
          description={car.description}
          brand={car.brands.brand}
        />
      ))}
    </Container>
  );
};

export default CardList;

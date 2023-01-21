import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ICars, ICarsApi } from "../../interface/ICars";
import getAllCars from "../../services/cars/get-all-cars";
import CardCar from "../card";
import { Container } from "./styles";

const CardList = () => {
  const [cars, setCars] = useState<ICarsApi[]>([]);

  const getCars = async () => {
    const response = await getAllCars();
    if (response.error) {
      toast.error(response.error);
    }
    console.log(response);
    setCars(response);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Container>
      {cars.map((car, index) => (
        <CardCar
          index={index}
          carId={car.id}
          carmModel={car.model}
          carYear={car.year}
          carDescription={car.description}
          carBrands={car.brands.brand}
        />
      ))}
    </Container>
  );
};

export default CardList;

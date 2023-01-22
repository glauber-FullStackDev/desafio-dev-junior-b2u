import { Types } from "mongoose";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ICarsApi } from "../../interface/ICars";
import deleteCarService from "../../services/cars/delete-car";
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
    setCars(response);
  };

  const deleteCar = async (id: Types.ObjectId) => {
    const response = await deleteCarService(id);

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.message);
    getCars();
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
          deleteCar={deleteCar}
        />
      ))}
    </Container>
  );
};

export default CardList;

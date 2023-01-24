import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ICars } from "../../interface/ICars";
import deleteCarService from "../../services/cars/delete-car";
import getAllCars from "../../services/cars/get-all-cars";
import CardCar from "../card";
import { Container } from "./styles";

const CardList = () => {
  const [cars, setCars] = useState<ICars[]>([]);

  const getCars = async () => {
    const response = await getAllCars();
    if (response.error) {
      toast.error(response.error);
    }
    setCars(response);
  };

  const deleteCar = async (id: string) => {
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
          key={index}
          id={car.id}
          model={car.model}
          year={car.year}
          description={car.description}
          brandId={car.brands.id}
          brands={car.brands}
          userId={car.users.id}
          users={car.users}
          deleteCar={deleteCar}
        />
      ))}
    </Container>
  );
};

export default CardList;

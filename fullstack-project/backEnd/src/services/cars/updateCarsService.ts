import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import { ICarResponse } from "../../interfaces/cars";

const updateCarsServie = async (
  data: ICarResponse,
  idCar: string,
  idUser: string
) => {
  const car = await prisma.car.findUnique({ where: { id: idCar } });

  if (car == null) {
    throw new AppError("car not found", 404);
  }

  if (car?.userId != idUser) {
    throw new AppError("You not owner of this car", 403);
  }

  const updatecar = await prisma.car.update({
    where: {
      id: car.id,
    },
    data,
  });

  return updatecar;
};
export default updateCarsServie;

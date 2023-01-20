import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { validate } from "uuid";
import Car from "../entities/cars.entity";

export const deleteCarByIdService = async (carId: string): Promise<boolean> => {
  const carRespository = AppDataSource.getRepository(Car);

  const verifyIdFormat = validate(carId);
  if (!verifyIdFormat) {
    throw new AppError("Incorret ID format provided", 400);
  }

  const findedCar = await carRespository.findOneBy({ id: carId });
  if (!findedCar) {
    throw new AppError("Product not found", 404);
  }

  const productDeleted = await carRespository
    .createQueryBuilder()
    .delete()
    .from(Car)
    .where("id = :id", { id: carId })
    .execute();

  return true;
};

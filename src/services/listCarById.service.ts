import { validate } from "uuid";
import AppDataSource from "../data-source";
import Car from "../entities/cars.entity";
import { AppError } from "../errors/AppError";

export const listCarByIdService = async (carId: string): Promise<Car> => {
  const carRepository = AppDataSource.getRepository(Car);

  const verifyIdFormat = validate(carId);
  if (!verifyIdFormat) {
    throw new AppError("Incorret ID format provided", 400);
  }

  const productFinded = await carRepository.findOneBy({
    id: carId,
  });
  if (!productFinded) {
    throw new AppError("Product not found", 404);
  }
  return productFinded;
};

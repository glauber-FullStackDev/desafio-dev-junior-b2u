import { validate } from "uuid";
import AppDataSource from "../data-source";
import Car from "../entities/cars.entity";
import Owner from "../entities/owner.entity";
import { AppError } from "../errors/AppError";

export const listCarByOwnerIdService = async (
  ownerID: string
): Promise<Car[]> => {
  const carRepository = AppDataSource.getRepository(Car);
  const ownerRepository = AppDataSource.getRepository(Owner);

  const verifyIdFormat = validate(ownerID);
  if (!verifyIdFormat) {
    throw new AppError("Incorret ID format provided", 400);
  }

  const ownerFinded = await ownerRepository.findOneBy({
    id: ownerID,
  });
  if (!ownerFinded) {
    throw new AppError("Product not found", 404);
  }

  const findCars = await carRepository.find({
    where: {
      owner: ownerFinded,
    },
  });

  return findCars;
};

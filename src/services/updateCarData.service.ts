import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { ICarUpdate } from "../interfaces/car.interface";
import { validate } from "uuid";
import Car from "../entities/cars.entity";
import Owner from "../entities/owner.entity";

export const updateCarDataService = async (
  { name, brand, description, price, owner }: ICarUpdate,
  carId: string
) => {
  const verifyIdFormat = validate(carId);
  if (!verifyIdFormat) {
    throw new AppError("Incorret ID format provided", 400);
  }

  const carRepository = AppDataSource.getRepository(Car);
  const ownerRepository = AppDataSource.getRepository(Owner);

  const findedCar = await carRepository.findOneBy({
    id: carId,
  });

  const ownerId = owner?.id;
  const findedOwner = await ownerRepository.findOneBy({
    id: ownerId,
  });

  const verifyIfEmailAlreadyExists = await ownerRepository.findOneBy({
    email: owner?.email,
  });
  if (verifyIfEmailAlreadyExists) {
    throw new AppError("Email Already been used", 404);
  }

  if (!findedOwner) {
    throw new AppError("Owner not found", 404);
  }

  if (!findedCar) {
    throw new AppError("Car not found", 404);
  }
  await carRepository
    .createQueryBuilder()
    .update(Car)
    .set({
      name: name ? name : findedCar.name,
      brand: brand ? brand : findedCar.brand,
      description: description ? description : findedCar.description,
      price: price ? price : findedCar.price,
    })
    .where("id = :id", { id: carId })
    .execute();

  await ownerRepository
    .createQueryBuilder()
    .update(Owner)
    .set({
      email: owner?.email ? owner?.email : findedOwner.email,
      name: owner?.name ? owner?.name : findedOwner.name,
      cellphone: owner?.cellphone ? owner?.cellphone : findedOwner.cellphone,
    })
    .where("id = :id", { id: findedOwner.id })
    .execute();

  const carChanged = await carRepository.findOneBy({
    id: carId,
  });

  return carChanged;
};

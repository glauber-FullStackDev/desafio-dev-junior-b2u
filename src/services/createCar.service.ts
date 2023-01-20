import AppDataSource from "../data-source";
import Car from "../entities/cars.entity";
import Owner from "../entities/owner.entity";
import { AppError } from "../errors/AppError";

import { ICarCreate } from "../interfaces/car.interface";

export const createCarService = async ({
  name,
  brand,
  price,
  year,
  description,
  owner,
}: ICarCreate): Promise<Car> => {
  const carRepository = AppDataSource.getRepository(Car);
  const ownerRepository = AppDataSource.getRepository(Owner);

  const checkIfCarAlreadyExists = await carRepository.findOneBy({
    name,
    brand,
    price,
    owner,
  });
  if (checkIfCarAlreadyExists) {
    throw new AppError("Car Already Listed", 409);
  }

  const findedOwner = await ownerRepository.findOneBy({ email: owner.email });

  if (!findedOwner) {
    const newOwner = ownerRepository.create({
      name: owner.name,
      email: owner.email,
      cellphone: owner.cellphone,
    });
    await ownerRepository.save(newOwner);

    const carWithNewOwner = carRepository.create({
      name,
      brand,
      price,
      year,
      description,
      owner: newOwner,
    });
    await carRepository.save(carWithNewOwner);

    return carWithNewOwner;
  }

  const car = carRepository.create({
    name,
    brand,
    price,
    year,
    description,
    owner: findedOwner,
  });

  await carRepository.save(car);
  return car;
};

import AppDataSource from "../data-source";
import Car from "../entities/cars.entity";

export const listAllCarsService = async (): Promise<Car[]> => {
  const productRepository = AppDataSource.getRepository(Car);

  const productsList = await productRepository.find();

  return productsList;
};

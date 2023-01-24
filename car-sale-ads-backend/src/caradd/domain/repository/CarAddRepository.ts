import { CarAdd } from '../CarAdd';

export interface CarAddRepository {
  save(carAdd: CarAdd): Promise<CarAdd>;
}

export const CarAddRepository = Symbol('CarAddRepository');

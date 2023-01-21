import { CarModel } from '../../../domain/models/car'

export interface LoadCars {
  loadCars: () => Promise<CarModel[]>
}

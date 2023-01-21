import { CarModel } from '../../../domain/models/car'

export interface LoadCars {
  loadAll: () => Promise<CarModel[]>
}

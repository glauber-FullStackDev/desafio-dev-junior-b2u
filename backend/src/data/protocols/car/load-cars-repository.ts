import { CarModel } from '../../../domain/models/car'

export interface LoadCarsRepository {
  loadCars: () => Promise<CarModel[]>
}

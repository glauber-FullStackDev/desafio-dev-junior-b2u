import { CarModel } from '../../../domain/models/car'

export interface LoadCarsRepository {
  loadAll: () => Promise<CarModel[]>
}

import { CarModel } from '../../../domain/models/car'

export interface LoadCarById {
  loadCarById: (id: string) => Promise<CarModel>
}

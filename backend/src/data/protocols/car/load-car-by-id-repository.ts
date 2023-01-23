import { CarModel } from '../../../domain/models/car'

export interface LoadCarByIdRepository {
  loadById: (id: string) => Promise<CarModel>
}

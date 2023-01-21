import { AddCarParams } from '../../../domain/use-cases/car/add-car'

export interface AddCarRepository {
  add: (carData: AddCarParams) => Promise<void>
}

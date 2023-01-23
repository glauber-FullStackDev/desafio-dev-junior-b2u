import { CarData, OwnerData } from '../../../domain/use-cases/car/update-car-by-id'

export interface UpdateCarByIdRepository {
  updateById: (id: string, car: CarData, owner: OwnerData, owner_id: string) => Promise<void>
}

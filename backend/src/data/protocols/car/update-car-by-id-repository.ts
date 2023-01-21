import { UpdateCarRawData } from '../../../domain/use-cases/car/update-car-by-id'

export interface UpdateCarByIdRepository {
  updateById: (id: string, raw: UpdateCarRawData) => Promise<void>
}

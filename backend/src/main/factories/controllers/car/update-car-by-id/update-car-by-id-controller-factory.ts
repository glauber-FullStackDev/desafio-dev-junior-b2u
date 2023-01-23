import { makeDbUpdateCarById } from '../../../../../main/factories/use-cases/car/update-car-by-id/db-update-car-by-id-factory'
import { UpdateCarByIdController } from '../../../../../presentation/controllers/car/update-car-by-id/update-car-controller'
import { Controller } from '../../../../../presentation/protocols'

export const makeUpdateCarByIdController = (): Controller => {
  return new UpdateCarByIdController(makeDbUpdateCarById())
}

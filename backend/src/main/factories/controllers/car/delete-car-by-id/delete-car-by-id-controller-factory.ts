import { makeDbDeleteCarById } from '../../../../../main/factories/use-cases/car/delete-car-by-id/db-delete-car-by-id-factory'
import { DeleteCarByIdController } from '../../../../../presentation/controllers/car/delete-car-by-id/delete-car-by-id-controller'
import { Controller } from '../../../../../presentation/protocols'

export const makeDeleteCarByIdController = (): Controller => {
  return new DeleteCarByIdController(makeDbDeleteCarById())
}

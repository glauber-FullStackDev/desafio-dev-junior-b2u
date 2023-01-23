import { makeDbLoadCarById } from '../../../../../main/factories/use-cases/car/load-car-by-id/db-load-car-by-id-factory'
import { LoadCarByIdController } from '../../../../../presentation/controllers/car/load-car-by-id/load-car-by-id-controller'
import { Controller } from '../../../../../presentation/protocols'

export const makeLoadCarByIdController = (): Controller => {
  return new LoadCarByIdController(makeDbLoadCarById())
}

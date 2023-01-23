import { makeDbLoadCars } from '../../../../../main/factories/use-cases/car/load-cars/db-load-cars-factory'
import { LoadCarsController } from '../../../../../presentation/controllers/car/load-cars/load-cars-controller'
import { Controller } from '../../../../../presentation/protocols'

export const makeLoadCarsController = (): Controller => {
  return new LoadCarsController(makeDbLoadCars())
}

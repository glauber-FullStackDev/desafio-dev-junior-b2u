import { makeDbAddCar } from '../../../../../main/factories/use-cases/car/add-car/db-add-car-factory'
import { makeDbAddOwner } from '../../../../../main/factories/use-cases/owner/add-owner/db-add-owner-factory'
import { AddCarController } from '../../../../../presentation/controllers/car/add-car/add-car-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeAddCarValidation } from './add-car-validation-factory'

export const makeAddCarController = (): Controller => {
  return new AddCarController(makeDbAddCar(), makeDbAddOwner(), makeAddCarValidation())
}

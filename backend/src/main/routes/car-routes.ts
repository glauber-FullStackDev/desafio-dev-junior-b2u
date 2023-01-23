import { Router } from 'express'
import { makeAddCarController } from '../../main/factories/controllers/car/add-car/add-car-controller-factory'
import { makeDeleteCarByIdController } from '../../main/factories/controllers/car/delete-car-by-id/delete-car-by-id-controller-factory'
import { makeUpdateCarByIdController } from '../../main/factories/controllers/car/update-car-by-id/update-car-by-id-controller-factory'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeLoadCarsController } from '../../main/factories/controllers/car/load-cars/load-cars-controller-factory'

export default (router: Router): void => {
  router.post('/car', adaptRoute(makeAddCarController()))
  router.delete('/car/:id', adaptRoute(makeDeleteCarByIdController()))
  router.patch('/car/:id', adaptRoute(makeUpdateCarByIdController()))
  router.get('/cars', adaptRoute(makeLoadCarsController()))
}

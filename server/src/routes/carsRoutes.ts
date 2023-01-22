import { Router } from 'express'
import CarsController from '../controllers/CarsController'
import { checkAuth } from '../utils/checkAuth'
import { imageUpload } from '../utils/imageUploads'
const routes = Router()

routes.use(checkAuth)

routes.get('/', CarsController.index)
routes.get('/:carId', CarsController.carForId)
routes.get('/all/count', CarsController.countCarRegister)
routes.get('/user/login', CarsController.userLoggedCars)
routes.post('/', imageUpload.single('image'), CarsController.store)
routes.put('/:carId', imageUpload.single('image'), CarsController.update)
routes.delete('/:carId', CarsController.delete)

export {
    routes
} 

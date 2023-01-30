import { Router } from 'express'
import { CreateCar } from '../Aplication/Car/createCar'
import { DeleteCar } from '../Aplication/Car/deleteCar'
import { FindAllCars } from '../Aplication/Car/findAllCars'
import { FindCar } from '../Aplication/Car/findCar'
import { FindCarsByOwner } from '../Aplication/Car/findCarsByOwner'
import { UpdateCar } from '../Aplication/Car/updateCar'
import { MongoConnection } from '../database/mongoConnection'
import { CarRepository } from '../repository/carRepository'
import { UserRepository } from '../repository/userRepository'
import { authMiddleware } from '../middlewares/authMiddleware'

export const carRouter = Router()
const mongoClient = new MongoConnection().getClient()
const carRepository = new CarRepository('BitMotorsDB', mongoClient)
const userRepository = new UserRepository('BitMotorsDB', mongoClient)
const createCar = new CreateCar(carRepository)
const findCar = new FindCar(carRepository, userRepository)
const findAllCars = new FindAllCars(carRepository)
const deleteCar = new DeleteCar(carRepository)
const updateCar = new UpdateCar(carRepository)
const findCarsByOwner = new FindCarsByOwner(carRepository, userRepository)

carRouter.get('/findAll', findAllCars.execute.bind(findAllCars))
carRouter.get('/find/:id', findCar.execute.bind(findCar))
carRouter.use(authMiddleware)
carRouter.delete('/delete/:id', deleteCar.execute.bind(deleteCar))
carRouter.patch('/update/:id', updateCar.execute.bind(updateCar))
carRouter.post('/create', createCar.execute.bind(createCar))
carRouter.get('/findByOwner/:id', findCarsByOwner.execute.bind(findCarsByOwner))

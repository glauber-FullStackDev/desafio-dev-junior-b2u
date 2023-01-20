import { Router } from 'express'
import { CreateCar } from '../Aplication/Car/createCar'
import { DeleteCar } from '../Aplication/Car/deleteCar'
import { FindAllCars } from '../Aplication/Car/findAllCars'
import { FindCar } from '../Aplication/Car/findCar'
import { UpdateCar } from '../Aplication/Car/updateCar'
import { MongoConnection } from '../database/mongoConnection'
import { CarRepository } from '../repository/carRepository'

export const carRouter = Router()
const mongoClient = new MongoConnection().getClient()
const carRepository = new CarRepository('BitMotorsDB', mongoClient)
const createCar = new CreateCar(carRepository)
const findCar = new FindCar(carRepository)
const findAllCars = new FindAllCars(carRepository)
const deleteCar = new DeleteCar(carRepository)
const updateCar = new UpdateCar(carRepository)

carRouter.delete('/delete/:id', deleteCar.execute.bind(deleteCar))
carRouter.patch('/update/:id', updateCar.execute.bind(updateCar))
carRouter.post('/create', createCar.execute.bind(createCar))
carRouter.get('/find/:id', findCar.execute.bind(findCar))
carRouter.get('/findAll', findAllCars.execute.bind(findAllCars))

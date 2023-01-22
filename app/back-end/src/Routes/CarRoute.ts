import { Router } from 'express';
import CarController from '../Controllers/CarController';
import tokenValidation from '../Middlewares/TokenValidation';
import { carFieldsValidation, validationCar } from '../Middlewares/CarValidation';

const CarRouter = Router();

CarRouter.post('/cars', tokenValidation, carFieldsValidation, (req, res) => new CarController(req, res).createCar());

CarRouter.get('/cars', (req, res) => new CarController(req, res).getCars());

CarRouter.get('/cars/:id', (req, res) => new CarController(req, res).getCarById());

CarRouter.get('/userCars', tokenValidation, (req, res) => new CarController(req, res).getUserCars());

CarRouter.get('/searchcars/:search', (req, res) => new CarController(req, res).getCarsBySearch());

CarRouter.put('/cars/:id', tokenValidation, validationCar, (req, res) => new CarController(req, res).updateCar());

CarRouter.delete('/cars/:id', tokenValidation, validationCar, (req, res) => new CarController(req, res).deleteCar());

export default CarRouter;

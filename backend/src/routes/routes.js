const express = require('express');
const validateRequest = require('../middlewares/validateRequest');
const carSchema = require('../validations/carSchema');
const { registerCar, listCars, viewCar, updateCar } = require('../controllers/cars');

const routes = express();

routes.post('/carro', validateRequest(carSchema), registerCar);
routes.get('/carros', listCars);
routes.get('/carros/:id', viewCar);
routes.put('/carros/:id', validateRequest(carSchema), updateCar);

module.exports = routes;
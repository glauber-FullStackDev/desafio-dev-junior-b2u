const express = require('express');
const validateRequest = require('../middlewares/validateRequest');
const carSchema = require('../validations/carSchema');
const { registerCar, listCars } = require('../controllers/cars');

const routes = express();

routes.post('/carro', validateRequest(carSchema), registerCar);
routes.get('/carros', listCars);

module.exports = routes;
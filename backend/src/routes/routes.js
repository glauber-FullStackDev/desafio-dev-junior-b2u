const express = require('express');
const validateRequest = require('../middlewares/validateRequest');
const carSchema = require('../validations/carSchema');
const { registerCar, listCars, viewCar, updateCar, deleteCar } = require('../controllers/cars');

const routes = express();

routes.post('/carros', validateRequest(carSchema), registerCar);
routes.get('/carros', listCars);
routes.get('/carros/:id', viewCar);
routes.put('/carros/:id', validateRequest(carSchema), updateCar);
routes.delete('/carros/:id', deleteCar);

module.exports = routes;
const express = require('express');
const carsController = require('../controllers/carrosController');

const route = express.Router();

route.get('/', carsController.getCars);
route.post('/', carsController.postCar);
route.put('/:id', carsController.editCar);
route.get('/:id', carsController.getCarById);
route.delete('/:id',carsController.deleteCar);

module.exports = route;
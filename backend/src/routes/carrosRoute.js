const express = require('express');
const carsController = require('../controllers/carrosController');

const route = express.Router();

route.get('/', carsController.getCars)
route.post('/', carsController.postCar)
route.put('/', carsController.editCar)

module.exports = route;
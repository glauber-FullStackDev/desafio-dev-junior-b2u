const express = require('express');
const carsController = require('../controllers/carrosController');

const route = express.Router();

route.get('/', carsController.getCars)
route.post('/', carsController.postCar)

module.exports = route;
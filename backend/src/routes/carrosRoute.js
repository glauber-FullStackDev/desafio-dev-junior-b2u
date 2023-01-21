const express = require('express');
const carsController = require('../controllers/carrosController');

const route = express.Router();

route.get('/', carsController.getCars)

module.exports = route;
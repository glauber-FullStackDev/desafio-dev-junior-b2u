const express = require('express');
const donosController = require('../controllers/donosController');

const route = express.Router();

route.get('/', donosController.getOwners);
route.post('/', donosController.postOwners);

module.exports = route;
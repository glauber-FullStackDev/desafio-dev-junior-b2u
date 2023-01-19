const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

module.exports = app;
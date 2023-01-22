const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler');
const carrosRoute = require('./routes/carrosRoute');
const donosRoute = require('./routes/donosRoute');

const app = express();

app.use(express.json());
app.use('/carros', carrosRoute);
app.use('/donos', donosRoute);
app.use(errorHandler);


module.exports = app;
const express = require('express');
const fileUpload = require('express-fileupload');
const { errorHandler } = require('./middlewares/errorHandler');
const carrosRoute = require('./routes/carrosRoute');

const app = express();

app.use(express.json());
app.use(fileUpload())
app.use('/carros', carrosRoute);
app.use(errorHandler);


module.exports = app;
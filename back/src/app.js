const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//carregando rotas
const index = require('./routes');
const carRoutes = require('./routes/car');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//definindo as rotas
app.use('/', index);
app.use('/cars', carRoutes);

//configurando exception handling
app.use(async (err, _req, res, _next) => {
  return res.status(err.status || 500).json({ error: 'Internal server error' });
});

module.exports = app;

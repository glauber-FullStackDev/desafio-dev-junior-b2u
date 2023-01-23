const express = require('express')

const DonoCarroController = require('./controllers/DonoCarroController')
const CarroController = require('./controllers/CarroController')

const routes = express.Router()

/* DONOS CARROS */
routes.get('/donos', DonoCarroController.listar)
routes.get('/donos/:id', DonoCarroController.buscarUm)
routes.post('/donos/busca', DonoCarroController.buscar)
routes.post('/donos', DonoCarroController.criar)
routes.put('/donos/:id', DonoCarroController.editar)
routes.delete('/donos/:id', DonoCarroController.deletar)

/* CARROS */
routes.get('/carros', CarroController.listar)
routes.get('/carros/:id', CarroController.buscarUm)
routes.post('/carros/busca/:nome', CarroController.buscar)
routes.post('/carros/dono', CarroController.buscarPorDono)
routes.post('/carros', CarroController.criar)
routes.put('/carros/:id', CarroController.editar)
routes.delete('/carros/:id', CarroController.deletar)

module.exports = routes
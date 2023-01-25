const express = require('express')
const {login} = require('./Login/login')
const { salvarCarro, listarCarro, atualizarCarro, deletarCarro } = require('./controladores/carro')
const { salvar, listarDono } = require('./controladores/donoCarro')

const rotas = express()

//rotas para carro
rotas.post('/salvarCarro',salvarCarro)
rotas.post('/login',login)
rotas.get('/listarCarro',listarCarro)
rotas.put('/atualizarCarro/:id',atualizarCarro)
rotas.delete('/deletarCarro/:id',deletarCarro)


//rotas para os donos dos veículos
rotas.post('/salvarDono',salvar)
rotas.get('/listarDono',listarDono)
module.exports = rotas
const express = require('express')
const app = express();
const port = 2000
const cors = require('cors')
const rotas = require('./rotas')
app.use(express.json())
app.use(cors())
app.use(rotas)
app.listen(port,function(){
    console.log(`Servidor iniciado na porta ${port}`)
})
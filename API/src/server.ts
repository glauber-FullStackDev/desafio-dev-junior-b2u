import "reflect-metadata"
const express = require('express')
const routes = require('./routes')
const cors = require('cors')

require('./database')

const app = express()

app.use(cors())
app.use(express.json({ limit: 10000000 }));
app.use(routes)

app.listen(3000)
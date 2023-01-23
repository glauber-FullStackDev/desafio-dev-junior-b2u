import express, { json } from 'express'
import setupRoutes from './routes'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')

const app = express()
app.use(cors())
app.use(json())

setupRoutes(app)

export default app

import express, { json } from 'express'
import setupRoutes from './routes'

const app = express()
app.use(json())

setupRoutes(app)

export default app

import express, { Express } from 'express'
import { routes as carsRoutes } from './routes/carsRoutes'
import { routes as userRoutes } from './routes/userRoutes'
import path from 'path'
import cors from 'cors'

import 'dotenv/config'

class AppController {
    app: Express

    constructor() {
        this.app = express()
        this.app.use(cors())
        this.getImages() 
        this.middlewares()
        this.routes()
    }

    middlewares () {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes () {
        this.app.use('/cars', carsRoutes)
        this.app.use('/users', userRoutes)
    }

    getImages() {
        this.app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
    }

}

export default new AppController().app
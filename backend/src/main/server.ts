import 'reflect-metadata'
import app from './config/app'
import * as dotenv from 'dotenv'
import { AppDataSource } from '../infra/db/typeorm/helper/app-data-source'
dotenv.config()

AppDataSource
  .getInstance()
  .initialize()
  .then(() => app.listen(process.env.PORT, () => { console.log(`Running server at ${process.env.PORT}`) }))
  .catch(error => { console.log(error) })

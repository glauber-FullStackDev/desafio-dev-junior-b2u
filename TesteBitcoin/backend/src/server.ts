import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
import bodyParser from 'body-parser';
import express from 'express'
import { useRoutes } from './routes';


const server = express()
server.use(cors())
server.use(bodyParser.json());
useRoutes(server)




server.listen(3333)

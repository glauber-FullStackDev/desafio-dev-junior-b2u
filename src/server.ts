
import express from "express";
import cors from "cors";
import { routes } from './routes/index';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cors());

app.use(routes);

const port = 3333;


app.listen(port, () => console.log("listening on port ", port));

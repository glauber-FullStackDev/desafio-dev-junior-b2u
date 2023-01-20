import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users.routes";
import vehiclesRouter from "./routes/vehicles.routes";
import { options } from "./tools/swagger-definitions";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.use("/", usersRouter);
app.use("/vehicles", vehiclesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

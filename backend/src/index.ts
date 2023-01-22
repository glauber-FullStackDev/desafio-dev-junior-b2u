import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users.routes";
import vehiclesRouter from "./routes/vehicles.routes";
// import { options } from "./tools/swagger-definitions";
// import swaggerUi from "swagger-ui-express";
// import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

const corsOptions = {
  origin: "*"
}
app.use(cors(corsOptions));

app.use("/", usersRouter);
app.use("/vehicles", vehiclesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Vehicles API");
});

app.use((req: Request, res: Response, next: NextFunction) => res.status(404).json({status: "Error", message: "Page not found"}))


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
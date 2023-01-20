import "reflect-metadata";
import express from "express";
import cors from "cors";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { appRoutes } from "./routes";

const app = express();
app.use(express.json());

app.use(cors());

appRoutes(app);

app.use(handleErrorMiddleware);

export default app;

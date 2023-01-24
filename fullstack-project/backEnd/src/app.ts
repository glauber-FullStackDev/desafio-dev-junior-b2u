import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { userRoutes } from "./routes/users.routes";
import handlerErrors from "./middlewares/handlerErrors";
import { loginRoutes } from "./routes/login.routes";
import { carsRoutes } from "./routes/cars.routes";

export const prisma = new PrismaClient();

export const app = express();
app.use(cors());

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/cars", carsRoutes);

app.use(handlerErrors);

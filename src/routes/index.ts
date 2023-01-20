import { Express } from "express";
import { carRoutes } from "./cars.routes";

export const appRoutes = (app: Express) => {
  app.use("/cars", carRoutes());
};

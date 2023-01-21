import { Router } from "express";

import allCarsController from "../controllers/cars/all-cars-controller";
import createCarController from "../controllers/cars/create-car-controller";
import deleteCarController from "../controllers/cars/deleteCar";
import updateCarController from "../controllers/cars/updateCars";

const routeCar = Router();

routeCar
  .get("/cars", allCarsController)
  .post("/cars", createCarController)
  .put("/cars/:id", updateCarController)
  .delete("/cars/:id", deleteCarController);

export { routeCar };

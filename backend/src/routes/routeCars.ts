import { Router } from "express";
import allBrandsController from "../controllers/brands/allBrands";

import allCarsController from "../controllers/cars/allCars";
import createCarController from "../controllers/cars/createCar";
import deleteCarController from "../controllers/cars/deleteCar";
import updateCarController from "../controllers/cars/updateCars";

const routerCar = Router();

routerCar
  .get("/cars", allCarsController)
  .post("/cars", createCarController)
  .put("/cars/:id", updateCarController)
  .delete("/cars/:id", deleteCarController);


export { routerCar };

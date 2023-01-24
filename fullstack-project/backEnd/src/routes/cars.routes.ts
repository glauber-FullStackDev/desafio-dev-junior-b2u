import { Router } from "express";
import createCarController from "../controllers/cars/createCarController";
import deleteCarController from "../controllers/cars/deleteCarsController";
import listCarsController from "../controllers/cars/listCarsController";
import updateCarsController from "../controllers/cars/updateCarsControler";
import verifyAuthToken from "../middlewares/verifyAuthToken";

export const carsRoutes = Router();

carsRoutes.post("/", verifyAuthToken, createCarController);
carsRoutes.get("/", listCarsController);
carsRoutes.delete("/:car_id", verifyAuthToken, deleteCarController);
carsRoutes.patch("/:car_id", verifyAuthToken, updateCarsController);

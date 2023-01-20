import { Router } from "express";

import { createProductController } from "../controllers/createCars.controller";
import { deleteCarByIdController } from "../controllers/deleteCarById.controller";
import { listAllCarsController } from "../controllers/listAllCars.controller";
import { listCarsByIdController } from "../controllers/listCarsById.controller";
import { listCarsByOwnerIdController } from "../controllers/listCarsByOwnerId.controller";
import { updateCarDataController } from "../controllers/updateAllCarData.controller";
import { validateUserCreate } from "../middlewares/validateCarCreate.middleware";
import { carCreateSchema } from "../schema/carsSchema.schema";

export const routes = Router();

export const carRoutes = () => {
  routes.post("", validateUserCreate(carCreateSchema), createProductController);
  routes.get("", listAllCarsController);
  routes.get("/:carId", listCarsByIdController);
  routes.get("/owner/:ownerId", listCarsByOwnerIdController);
  routes.delete("/:carId", deleteCarByIdController);
  routes.patch("/:carId", updateCarDataController);

  return routes;
};

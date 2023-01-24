import express, { Router, Request, Response, NextFunction } from "express";
import { VehiclesController } from "../controllers/vehicles.controller";
import { VehiclesRepository } from "../repositories/vehicles.repository";
import prismaClient from "../services/prisma.service";
import { verifyToken } from "../middlewares/jwt-token.middleware";
import { handleCreateVehicle } from "../middlewares/handle-vehicle.middleware";

const vehiclesRouter: Router = express.Router();
const vehiclesRepository: VehiclesRepository = new VehiclesRepository(
  prismaClient
);
const vehiclesController: VehiclesController = new VehiclesController(
  vehiclesRepository
);

vehiclesRouter.get("/", vehiclesController.findAll);
vehiclesRouter.get(
  "/:id([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})",
  vehiclesController.findOne
);
vehiclesRouter.post("/", handleCreateVehicle, vehiclesController.create);
vehiclesRouter.put("/", verifyToken, vehiclesController.update);
vehiclesRouter.delete("/", verifyToken, vehiclesController.remove);


export default vehiclesRouter;

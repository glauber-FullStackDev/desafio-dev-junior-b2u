import express, { Router, Request, Response, NextFunction } from "express";
import { VehiclesController } from "../controllers/vehicles.controller";
import { VehiclesRepository } from "../repositories/vehicles.repository";
import prismaClient from "../services/prisma.service";

const vehiclesRouter: Router = express.Router();
const vehiclesRepository: VehiclesRepository = new VehiclesRepository(prismaClient);
const vehiclesController: VehiclesController = new VehiclesController(vehiclesRepository);

vehiclesRouter.get("/", vehiclesController.findAll);
vehiclesRouter.get("/find/:plate([A-Z0-9]{7})", vehiclesController.findOneByPlate);
vehiclesRouter.get("/find/:id([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})", (req: Request, res: Response) => res.send(req.params.uuid));
vehiclesRouter.post("/", vehiclesController.create);
vehiclesRouter.put("/", vehiclesController.update);
vehiclesRouter.delete("/", vehiclesController.remove);

vehiclesRouter.use((req: Request, res: Response, next: NextFunction) => res.status(404).json({status: "Error", message: "Page not found"}))


export default vehiclesRouter;
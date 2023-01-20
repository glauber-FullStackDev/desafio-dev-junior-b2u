import express, { Router, Request, Response } from "express";
import { VehiclesController } from "../controllers/vehicles.controller";
import { VehiclesService } from "../services/vehicles.service";
import prismaClient from "../database/client";

const vehiclesRouter: Router = express.Router();
const vehiclesService: VehiclesService = new VehiclesService(prismaClient);
const vehiclesController: VehiclesController = new VehiclesController(vehiclesService);

vehiclesRouter.get("/", vehiclesController.findAll);
vehiclesRouter.get("/find/:plate([A-Z0-9]{7})", vehiclesController.findOneByPlate);
vehiclesRouter.get("/find/:uuid([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})", (req: Request, res: Response) => res.send(req.params.uuid));
vehiclesRouter.post("/", vehiclesController.create);
vehiclesRouter.put("/", vehiclesController.update);
vehiclesRouter.delete("/", vehiclesController.remove);


export default vehiclesRouter;
import { Router } from "express";
import { VehiclesController } from "../controller/VehiclesController";
import { VehiclesData } from "../dataBase/VehiclesData";
import { GenerateId } from "../helpers/GenerateId";

export const routeVehicle = Router()

const vehicleController = new VehiclesController(
    new VehiclesData(),
    new GenerateId()
)

routeVehicle.post("/create",vehicleController.create)
routeVehicle.get("",vehicleController.getAll)
routeVehicle.get("/:id",vehicleController.getById)
routeVehicle.put("/update",vehicleController.update)
routeVehicle.delete("/delete/:id",vehicleController.delete)
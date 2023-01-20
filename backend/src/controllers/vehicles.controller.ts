import { VehiclesService } from "../services/vehicles.service";
import { CreateVehicleDto } from "../core/dtos/create-vehicle.dto";
import { UpdateVehicleDto } from "../core/dtos/update-vehicle.dto";
import { Request, Response } from "express";

export class VehiclesController {
  constructor(private readonly vehicleService: VehiclesService) {}

  create(req: Request<CreateVehicleDto>, res: Response) {
    return this.vehicleService.create(req.body);
  }

  findAll(req: Request, res: Response) {
    return this.vehicleService.findAll();
  }

  findOne(req: Request<CreateVehicleDto>, res: Response) {
    return this.vehicleService.findOne(req.body.id);
  }

  findOneByPlate(req: Request<CreateVehicleDto>, res: Response) {
    return this.vehicleService.findOneByPlate(req.body.plate);
  }

  update(req: Request<UpdateVehicleDto>, res: Response) {
    return this.vehicleService.update(req.body.id!, req.body);
  }

  remove(req: Request, res: Response) {
    return this.vehicleService.remove(req.body.id!);
  }
}

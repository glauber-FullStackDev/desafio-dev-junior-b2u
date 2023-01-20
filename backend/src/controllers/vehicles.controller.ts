import { VehiclesService } from "../services/vehicles.service";
import { CreateVehicleDto } from "../core/dtos/create-vehicle.dto";
import { UpdateVehicleDto } from "../core/dtos/update-vehicle.dto";
import { Request, Response } from "express";

export class VehiclesController {
  constructor(private readonly vehicleService: VehiclesService) {
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findOneByPlate = this.findOneByPlate.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async create(req: Request<CreateVehicleDto>, res: Response) {
    return res.json(await this.vehicleService.create(req.body));
  }

  async findAll(req: Request, res: Response) {
    return res.json(await this.vehicleService.findAll());
  }

  async findOne(req: Request<CreateVehicleDto>, res: Response) {
    return res.json(await this.vehicleService.findOne(req.body.id));
  }

  async findOneByPlate(req: Request<CreateVehicleDto>, res: Response) {
    return res.json(await this.vehicleService.findOneByPlate(req.body.plate));
  }

  async update(req: Request<UpdateVehicleDto>, res: Response) {
    return res.json(await this.vehicleService.update(req.body.id!, req.body));
  }

  async remove(req: Request, res: Response) {
    return res.json(this.vehicleService.remove(req.body.id!));
  }
}

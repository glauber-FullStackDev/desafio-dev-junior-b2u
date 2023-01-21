import { VehiclesRepository } from "../repositories/vehicles.repository";
import { CreateVehicleDto } from "../core/dtos/create-vehicle.dto";
import { UpdateVehicleDto } from "../core/dtos/update-vehicle.dto";
import { Request, Response } from "express";

export class VehiclesController {
  constructor(private readonly vehicleRepository: VehiclesRepository) {
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findOneByPlate = this.findOneByPlate.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async create(req: Request<CreateVehicleDto>, res: Response) {
    return res.json(await this.vehicleRepository.create(req.body));
  }

  async findAll(req: Request, res: Response) {
    return res.json(await this.vehicleRepository.findAll());
  }

  async findOne(req: Request<CreateVehicleDto>, res: Response) {
    return res.json(await this.vehicleRepository.findOne(req.params));
  }

  async findOneByPlate(req: Request<CreateVehicleDto>, res: Response) {
    return res.json(
      await this.vehicleRepository.findOneByPlate(req.params)
    );
  }

  async update(req: Request<UpdateVehicleDto>, res: Response) {
    return res.json(await this.vehicleRepository.update(req.body));
  }

  async remove(req: Request, res: Response) {
    return res.json(this.vehicleRepository.remove(req.body));
  }
}

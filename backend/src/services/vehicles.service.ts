import { UpdateVehicleDto } from "../core/dtos/update-vehicle.dto";
import { CreateVehicleDto } from "../core/dtos/create-vehicle.dto";
import PrismaClient from "../database/client";
import {PrismaClient as client} from "@prisma/client";
import { Vehicle } from "../core/entities/vehicle.entity"

export class VehiclesService {
  constructor(private readonly prismaClient: typeof PrismaClient) {
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findOneByPlate = this.findOneByPlate.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return await this.prismaClient.vehicle.create({
      data: createVehicleDto,
    });
  }

  async findAll(): Promise<Vehicle[]> {
    return await <Promise<Vehicle[]>>this.prismaClient.vehicle.findMany();
  }

  async findOne(id: string): Promise<Vehicle | null> {
    return await this.prismaClient.vehicle.findUnique({ where: { id } });
  }

  async findOneByPlate(plate: string): Promise<Vehicle> {
    return await this.prismaClient.vehicle.findUniqueOrThrow({
      where: { plate },
    });
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    return await this.prismaClient.vehicle.update({
      data: updateVehicleDto,
      where: { id: id },
    });
  }

  async remove(id: string): Promise<Vehicle> {
    return await this.prismaClient.vehicle.delete({ where: { id } });
  }
}

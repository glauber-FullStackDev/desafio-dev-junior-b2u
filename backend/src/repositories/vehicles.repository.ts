import { UpdateVehicleDto } from "../core/dtos/update-vehicle.dto";
import { CreateVehicleDto } from "../core/dtos/create-vehicle.dto";
import PrismaClient from "../services/prisma.service";
import { Vehicle } from "../core/entities/vehicle.entity";
import { DataResponse, Status } from "../core/entities/responses.entity";
import { ReadVehicleDto } from "../core/dtos/read-vehicle.dto";
import { User } from "../core/entities/user.entity";

export class VehiclesRepository {
  constructor(private readonly prismaClient: typeof PrismaClient) {
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findOneByPlate = this.findOneByPlate.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async create(
    createVehicleDto: CreateVehicleDto
  ): Promise<DataResponse<Vehicle | string>> {
    try {
      return {
        status: Status.Ok,
        message: "Vehicle created",
        data: await <Promise<Vehicle>>(
          this.prismaClient.vehicle.create({ data: createVehicleDto })
        ),
      };
    } catch (error) {

      return {
        status: Status.Error,
        message: "Error creating vehicle",
        data: "",
      };
    }
  }

  async findAll(): Promise<DataResponse<Vehicle[] | string>> {
    try {
      return {
        status: Status.Ok,
        message: "Vehicles",
        data: await <Promise<Vehicle[]>>this.prismaClient.vehicle.findMany({
          orderBy: {
            createdAt: "desc"
          },
          include: {
            User: {
              select: {
                email: true, 
                fullname: true,
                phone: true
              }
            }
          }
        }),
      };
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot retrieve vehicles",
        // data: "",
      };
    }
  }

  async findOne(
    readVehicleDto: ReadVehicleDto
  ): Promise<DataResponse<Vehicle | string>> {
    try {
      return {
        status: Status.Ok,
        message: "Vehicle found",
        data: await <Promise<Vehicle>>(
          this.prismaClient.vehicle.findUniqueOrThrow({
            where: { id: readVehicleDto.id },
          })
        ),
      };
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot retrieve vehicle",
        // data: "",
      };
    }
  }

  async findOneByPlate(
    readVehicleDto: ReadVehicleDto
  ): Promise<DataResponse<Vehicle | string>> {
    try {
      return {
        status: Status.Ok,
        message: "Vehicle found",
        data: await <Promise<Vehicle>>this.prismaClient.vehicle.findUniqueOrThrow({
          where: { plate: readVehicleDto.plate },
        }),
      };
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot retrieve vehicle",
        // data: "",
      };
    }
  }

  async update(
    updateVehicleDto: UpdateVehicleDto
  ): Promise<DataResponse<Vehicle | string>> {
    try {
      return {
        status: Status.Ok,
        message: "Vehicle updated",
        data: await <Promise<Vehicle>>this.prismaClient.vehicle.update({
          data: updateVehicleDto,
          where: { id: updateVehicleDto.id },
        })
      }
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot update vehicle",
        // data: ""
      }
    }
  }

  async remove(
    readVehicleDto: ReadVehicleDto
  ): Promise<DataResponse<Vehicle | string>> {
    try {
      return {
        status: Status.Ok,
        message: "Vehicle removed",
        data: await <Promise<Vehicle>>this.prismaClient.vehicle.delete({
          where: { id: readVehicleDto.id },
        })
      }
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot remove vehicle",
        // data: ""
      }
    }
  }
}

import { UpdateUserDto } from "../core/dtos/update-user.dto";
import { CreateUserDto } from "../core/dtos/create-user.dto";
import PrismaClient from "../services/prisma.service";
import { User } from "../core/entities/user.entity";
import { ReadUserDto } from "../core/dtos/read-user.dto";
import { DataResponse, Status } from "../core/entities/responses.entity";

export class UsersRepository {
  constructor(private readonly prismaClient: typeof PrismaClient) {
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findOneByEmail = this.findOneByEmail.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async create(
    createUserDto: CreateUserDto
  ): Promise<DataResponse<User>> {
    try {
      return {
        status: Status.Ok,
        message: "User created",
        data: await (<Promise<User>>(
          this.prismaClient.user.create({ data: createUserDto })
        )),
      };
    } catch (error) {
      console.log(error);
      
      return {
        status: Status.Error,
        message: "Error creating user"
      };
    }
  }

  async findAll(): Promise<DataResponse<User[] | string>> {
    try {
      return {
        status: Status.Ok,
        message: "Users",
        data: await (<Promise<User[]>>this.prismaClient.user.findMany()),
      };
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot retrieve users",
        data: "",
      };
    }
  }

  async findOne(
    id: string
  ): Promise<DataResponse<Partial<User> | string>> {
    try {
      return {
        status: Status.Ok,
        message: "User found",
        data: await (<Promise<Partial<User>>>
          this.prismaClient.user.findUniqueOrThrow(
            { 
              where: { id },
              select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                fullname: true,
                email: true,
                phone: true,
                Vehicles: true
              }
            }
          )
        ),
      };
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot retrieve user",
        data: "",
      };
    }
  }

  async findOneByEmail(
    email: string
  ): Promise<DataResponse<User>> {
    try {
      return {
        status: Status.Ok,
        message: "User found",
        data: await (<Promise<User>>(
          this.prismaClient.user.findUniqueOrThrow({
            where: { email },
          }))
        ),
      };
    } catch (error) {
      const errorResponse: DataResponse<User> = {
        status: Status.Error,
        message: "Cannot retrieve user",
      }
      return errorResponse;

    }
  }

  async update(
    readUserDto: UpdateUserDto
  ): Promise<DataResponse<User | string>> {
    try {
      return {
        status: Status.Ok,
        message: "User updated",
        data: await <Promise<User>>this.prismaClient.user.update({
          data: readUserDto,
          where: { id: readUserDto.id },
        }),
      };
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot update user",
        data: "",
      };
    }
  }

  async remove(
    readUserDto: ReadUserDto
  ): Promise<DataResponse<User | string>> {
    try {
      return {
        status: Status.Ok,
        message: "User removed",
        data: await <Promise<User>>this.prismaClient.user.delete({
          where: { id: readUserDto.id },
        }),
      };
    } catch (error) {
      return {
        status: Status.Error,
        message: "Cannot remove user",
        data: "",
      };
    }
  }
}

import { UpdateUserDto } from "../core/dtos/update-user.dto";
import { CreateUserDto } from "../core/dtos/create-user.dto";
import PrismaClient from "../database/client";
import { User } from "../core/entities/user.entity";

export class UsersService {
  constructor(private readonly prismaClient: typeof PrismaClient) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.prismaClient.user.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prismaClient.user.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.prismaClient.user.findUnique({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.prismaClient.user.findUniqueOrThrow({
      where: { email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.prismaClient.user.update({
      data: updateUserDto,
      where: { id: id },
    });
  }

  async remove(id: string): Promise<User> {
    return await this.prismaClient.user.delete({ where: { id } });
  }
}

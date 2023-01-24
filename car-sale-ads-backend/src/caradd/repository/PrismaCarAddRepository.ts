import { PrismaService } from 'src/database/prisma.service';
import { CarAdd } from '../domain/CarAdd';
import { CarAddRepository } from '../domain/repository/CarAddRepository';

export class PrismaCarAddRepository implements CarAddRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  save(carAdd: CarAdd): Promise<CarAdd> {
    throw new Error('Method not implemented.');
  }
}

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaService } from 'src/database/prisma.service';
import { CarAddController } from './controller/carAdd.controller';
import { CarAddRepository } from './domain/repository/CarAddRepository';
import { PrismaCarAddRepository } from './repository/PrismaCarAddRepository';
import { CreateCarAddService } from './services/createCarAdd.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CarAddController],
  providers: [
    CreateCarAddService,
    {
      provide: CarAddRepository,
      useFactory: (prismaClient: PrismaService) =>
        new PrismaCarAddRepository(prismaClient),
      inject: [PrismaService],
    },
  ],
})
export class CarAddModule {}

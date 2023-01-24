import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaService } from 'src/database/prisma.service';
import { CarAdController } from './controller/carAd.controller';
import { CarAdRepository } from './domain/repository/CarAdRepository';
import { PrismaCarAdRepository } from './repository/PrismaCarAdRepository';
import { CreateCarAdService } from './services/createCarAd.service';
import { ListCarAdsService } from './services/listCarAds.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CarAdController],
  providers: [
    CreateCarAdService,
    ListCarAdsService,
    {
      provide: CarAdRepository,
      useFactory: (prismaClient: PrismaService) =>
        new PrismaCarAdRepository(prismaClient),
      inject: [PrismaService],
    },
  ],
})
export class CarAdModule {}

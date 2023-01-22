import { Module } from '@nestjs/common';
import { PrismaClient } from './prisma.service';

@Module({
  providers: [PrismaClient],
})
export class DatabaseModule {}

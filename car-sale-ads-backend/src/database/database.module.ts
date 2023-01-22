import { Logger, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService, { provide: Logger, useClass: Logger }],
  exports: [PrismaService],
})
export class DatabaseModule {}

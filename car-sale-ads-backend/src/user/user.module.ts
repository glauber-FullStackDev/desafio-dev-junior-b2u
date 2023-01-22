import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaService } from 'src/database/prisma.service';
import { UserController } from './controller/user.controller';
import { UserRepository } from './domain/repository/UserRepository';
import { PrismaUserRepository } from './repository/PrismaUserRepository';
import { RegisterUserService } from './services/registerUser/registerUser.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    RegisterUserService,
    {
      provide: UserRepository,
      useFactory: (prismaClient: PrismaService) =>
        new PrismaUserRepository(prismaClient),
      inject: [PrismaService],
    },
  ],
})
export class UserModule {}

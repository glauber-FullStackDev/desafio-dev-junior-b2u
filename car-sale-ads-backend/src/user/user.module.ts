import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { RegisterUserService } from './services/registerUser/registerUser.service';

@Module({
  controllers: [UserController],
  providers: [RegisterUserService],
})
export class UserModule {}

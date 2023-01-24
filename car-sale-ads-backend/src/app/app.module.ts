import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CarAdModule } from 'src/carAd/carAdd.module';

import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, AuthModule, CarAdModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [VehiclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

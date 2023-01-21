import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
  name: string;
  brand: string;
  manufacturingYear: string;
  description: string;
  owner: {
    name: string;
    email: string;
    phone: string;
  };
}

import { Prisma } from ".prisma/client";
import { CreateVehicleDto } from "./create-vehicle.dto";

export interface UpdateVehicleDto extends Partial<CreateVehicleDto> {
  id?: string | undefined;
  createdAt?: string | Date | undefined;
  updatedAt?: string | Date | undefined;
  plate?: string | undefined;
  name?: string | undefined;
  brand?: string | undefined;
  year?: number | undefined;
  description?: string | undefined;
  User?: Prisma.UserCreateNestedOneWithoutVehiclesInput | undefined;
}

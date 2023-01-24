import { Prisma } from ".prisma/client";
import { CreateUserDto } from "./create-user.dto";

export interface UpdateUserDto extends Partial<CreateUserDto> {
  id?: string;
  createdAt?: string | Date | undefined;
  updatedAt?: string | Date | undefined;
  fullname?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  phone?: string | undefined;
  Vehicles?: Prisma.VehicleCreateNestedManyWithoutUserInput | undefined;
}

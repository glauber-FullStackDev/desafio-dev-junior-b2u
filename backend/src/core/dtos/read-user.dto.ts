import { Prisma } from ".prisma/client";
import { CreateUserDto } from "./create-user.dto";


export type ReadUserDto = Omit<Partial<CreateUserDto>, "password">;

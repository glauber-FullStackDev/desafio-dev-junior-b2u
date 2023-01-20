import { Prisma } from '@prisma/client';

export interface CreateUserDto extends Prisma.UserCreateInput {}
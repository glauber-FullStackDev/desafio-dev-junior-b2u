import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import * as bcrypt from "bcryptjs";

const createUserService = async (
  data: IUserRequest
): Promise<IUserResponse> => {
  const emailAlreadyExists = await prisma.user.findUnique({
    where: { email: data.email.toLowerCase() },
  });

  if (emailAlreadyExists) {
    throw new AppError("E-mail already been used", 422);
  }

  const nameAlreadyExists = await prisma.user.findUnique({
    where: { name: data.name.toLowerCase() },
  });

  if (nameAlreadyExists) {
    throw new AppError("Username already been used", 422);
  }

  const phoneAlreadyExists = await prisma.user.findUnique({
    where: { phone: data.phone },
  });

  if (phoneAlreadyExists) {
    throw new AppError("This phone already been used", 422);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name.toLowerCase(),
      email: data.email.toLowerCase(),
      password: hashedPassword,
      phone: data.phone,
    },
    include: {
      cars: true,
    },
  });

  const { password, ...response } = user;

  return response;
};

export default createUserService;

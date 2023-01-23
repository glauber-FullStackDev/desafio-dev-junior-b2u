import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUserRepository = async (params: any) => {
  return await prisma.user.create({
    data: {
      name: params.name,
      email: params.email,
      phone: params.phone,
    },
  });
};

export default createUserRepository;

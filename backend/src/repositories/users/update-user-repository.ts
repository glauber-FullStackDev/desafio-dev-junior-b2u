import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateUserRepository = async (id: string, params: any) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: params.name,
      email: params.email,
      phone: params.phone,
    },
  });
};

export default updateUserRepository;

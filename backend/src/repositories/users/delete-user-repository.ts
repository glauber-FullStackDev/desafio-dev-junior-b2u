import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUserRepository = async (id: string) => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
    select: {
      name: true,
      email: true,
      phone: true,
    },
  });
};

export default deleteUserRepository;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUserRepository = async (id: string) => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
};

export default deleteUserRepository;
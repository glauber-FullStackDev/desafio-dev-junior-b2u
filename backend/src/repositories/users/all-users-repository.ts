import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allUsersRepository = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
    },
  });
};

export default allUsersRepository;

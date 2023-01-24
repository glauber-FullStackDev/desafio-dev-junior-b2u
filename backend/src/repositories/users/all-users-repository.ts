import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allUsersRepository = async () => {
  return await prisma.user.findMany();
};

export default allUsersRepository;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteCarRepository = async (id: string) => {
  return await prisma.cars.delete({
    where: {
      id: id,
    },
  });
};

export default deleteCarRepository;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allCarsRepository = async () => {
  return await prisma.cars.findMany({
    include: {
      users: true,
      brands: true,
    },
  });
};

export default allCarsRepository;

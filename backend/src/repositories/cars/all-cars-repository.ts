import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allCarsRepository = async () => {
  return await prisma.cars.findMany({
    include: {
      brands: true,
      users: true,
    },
  });
};

export default allCarsRepository;

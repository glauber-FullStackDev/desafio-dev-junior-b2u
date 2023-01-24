import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCarsRepository = async (params: any) => {
  return await prisma.cars.create({
    data: {
      model: params.model,
      year: params.year,
      description: params.description,
      brandId: params.brandId,
      userId: params.userId,
    },
    include: {
      brands: true,
      users: true,
    },
  });
};

export default createCarsRepository;
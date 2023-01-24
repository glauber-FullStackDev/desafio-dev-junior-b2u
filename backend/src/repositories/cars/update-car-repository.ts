import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateCarsRepository = async (id: string, params: any) => {
  return await prisma.cars.update({
    where: {
      id: id,
    },
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

export default updateCarsRepository;

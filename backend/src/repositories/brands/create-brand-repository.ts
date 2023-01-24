import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBrandRepository = async (params: any) => {
  return await prisma.carBrand.create({
    data: {
      brand: params.brand,
    },
  });
};

export default createBrandRepository;

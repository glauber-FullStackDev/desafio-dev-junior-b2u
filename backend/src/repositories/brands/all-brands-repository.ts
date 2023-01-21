import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allBrandsRepositories = async () => {
  return await prisma.carBrand.findMany({
    select: {
      id: true,
      brand: true,
    },
  });
};

export default allBrandsRepositories;

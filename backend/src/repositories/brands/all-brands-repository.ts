import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allBrandsRepositories = async () => {
  return await prisma.carBrand.findMany();
};

export default allBrandsRepositories;

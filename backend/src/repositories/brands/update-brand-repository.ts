import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateBrandRepository = async (id: string, params: any) => {
  return await prisma.carBrand.update({
    where: {
      id: id,
    },
    data: {
      brand: params.brand,
    }
  });
};

export default updateBrandRepository;
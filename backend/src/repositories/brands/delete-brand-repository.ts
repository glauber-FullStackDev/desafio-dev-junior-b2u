import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteBrandRepository = async (id: string) => {
  return await prisma.carBrand.delete({
    where: {
      id: id,
    },
  });
};

export default deleteBrandRepository;

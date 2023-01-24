import { prisma } from "../../app";

const listCarsService = async () => {
  const listCars = await prisma.car.findMany({
    include: {
      user: {
        select: {
          email: true,
          name: true,
          phone: true,
        },
      },
    },
  });

  return listCars;
};
export default listCarsService;

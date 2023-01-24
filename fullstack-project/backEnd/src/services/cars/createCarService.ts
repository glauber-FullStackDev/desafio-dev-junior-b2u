import { prisma } from "../../app";
import { ICarRequest } from "../../interfaces/cars";

const createCarService = async (data: ICarRequest, userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  const createCar = await prisma.car.create({
    data: {
      name: data.name,
      brand: data.brand,
      year: data.year,
      description: data.description,
      userId: userId,
    },
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
  const { ...response } = createCar;

  return response;
};

export default createCarService;

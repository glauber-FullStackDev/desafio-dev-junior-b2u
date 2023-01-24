import { prisma } from "../../app";
import { AppError } from "../../errors/appError";

const deleteCarsService = async (userId: string, idParams: string) => {
  const car = await prisma.car.findUnique({ where: { id: idParams } });

  if (car == null) {
    throw new AppError("Car not found", 404);
  }
  if (car?.userId == userId) {
    const deleteProduct = await prisma.car.delete({
      where: {
        id: car.id,
      },
    });
    return deleteProduct;
  } else {
    throw new AppError("You not owner of this car", 403);
  }
};
export default deleteCarsService;

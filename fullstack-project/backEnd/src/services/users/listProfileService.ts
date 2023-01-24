import { prisma } from "../../app";
import { AppError } from "../../errors/appError";

const listProfileService = async (userId: any) => {
  const profile = await prisma.user.findUnique({
    where: { id: userId },
    include: { cars: true },
  });

  if (!profile) {
    throw new AppError("User Not Found", 404);
  }

  const { password, ...response } = profile;

  return response;
};
export default listProfileService;

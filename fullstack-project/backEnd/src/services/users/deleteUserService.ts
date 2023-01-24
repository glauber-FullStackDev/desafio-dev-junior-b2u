import { prisma } from "../../app";
import { AppError } from "../../errors/appError";

const deleteUserService = async (idToken: any, idParams: any) => {
  const user = await prisma.user.findUnique({ where: { id: idParams } });

  if (!user) {
    throw new AppError("user not found", 404);
  }
  if (idToken == idParams) {
    const deleteUser = await prisma.user.delete({
      where: {
        id: user.id,
      },
    });
    return deleteUser;
  } else {
    throw new AppError("You not owner of this profile", 403);
  }
};
export default deleteUserService;

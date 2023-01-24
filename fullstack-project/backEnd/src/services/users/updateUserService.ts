import { IUserRequestUpdate } from "../../interfaces/users";
import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import * as bcrypt from "bcryptjs";

const updateUserService = async (
  data: IUserRequestUpdate,
  dataUser: any,
  idParams: string
) => {
  const user = await prisma.user.findUnique({ where: { id: dataUser.id } });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  if (data.password) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    if (idParams == dataUser.id) {
      const updatedUser = await prisma.user.update({
        where: {
          id: dataUser.id,
        },
        data: {
          email: data.email,
          name: data.name,
          password: hashedPassword,
          phone: data.phone,
        },
      });
      const { password, ...response } = updatedUser;
      return response;
    } else {
      throw new AppError("You not owner of this profile", 403);
    }
  }

  if (idParams == dataUser.id) {
    const updatedUser = await prisma.user.update({
      where: {
        id: dataUser.id,
      },
      data,
    });
    const { password, ...response } = updatedUser;
    return response;
  } else {
    throw new AppError("You not owner of this profile", 403);
  }
};
export default updateUserService;

import { prisma } from "../../app";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/login";
import { AppError } from "../../errors/appError";

const loginService = async ({ email, password }: IUserLogin) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new AppError("Wrong credentials", 403);
  }

  const matchPassword = await compare(password, user.password);
  if (!matchPassword) {
    throw new AppError("Wrong credentials", 403);
  }

  const token = jwt.sign(
    {
      user: {
        email: email,
        id: user.id,
        phone: user.phone,
        name: user.name,
      },
    },
    String(process.env.JWT_SECRET),
    {
      expiresIn: "12h",
    }
  );

  return token;
};

export default loginService;

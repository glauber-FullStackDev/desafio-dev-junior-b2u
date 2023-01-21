import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allUsersController = async (req: Request, res: Response) => {
  try {
    const carData = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });
    return res.status(201).json(carData);
  } catch (error) {
    return res.status(400).json({ message: "Error Fetching users" });
  }
};

export default allUsersController;

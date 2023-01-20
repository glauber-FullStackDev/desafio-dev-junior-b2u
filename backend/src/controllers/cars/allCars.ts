import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allCarsController = async (req: Request, res: Response) => {
  try {
    const carData = await prisma.cars.findMany({
      select: {
        id: true,
        name: true,
        year: true,
        description: true,
      },
    });
    return res.status(201).json(carData);
  } catch (error) {
    return res.status(400).json({ message: "Error Fetching Tasks" });
  }
};

export default allCarsController;

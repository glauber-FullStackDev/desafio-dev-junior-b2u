import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCarController = async (req: Request, res: Response) => {
  try {
    await prisma.cars.create({
      data: {
        name: req.body.name,
        year: req.body.year,
        description: req.body.description,
        brands: {
          create: {
            name: req.body.name,
          },
        },
      },
      include: {
        brands: true,
      },
    });

    return res
      .status(201)
      .json({ message: "Car Registration successfully Completed!" });
  } catch (error) {
    return res.status(400).json({ message: "Unsuccessful car Registration" });
  }
};

export default createCarController;

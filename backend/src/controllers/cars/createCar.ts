import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createCarController = async (req: Request, res: Response) => {
  try {
    await prisma.cars.create({
      data: {
        name: req.body.name,
        year: req.body.year,
        description: req.body.description,
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

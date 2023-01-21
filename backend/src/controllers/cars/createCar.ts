import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCarController = async (req: Request, res: Response) => {
  try {
    await prisma.cars.create({
      data: {
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        brandId: req.body.brandId,
        userId: req.body.userId,
      },
      include: {
        brands: true,
        users: true,
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

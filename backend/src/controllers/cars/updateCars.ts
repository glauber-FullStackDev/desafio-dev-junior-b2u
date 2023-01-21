import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const updateCarController = async (req: Request, res: Response) => {
  try {
    await prisma.cars.update({
      where: {
        id: req.params.id,
      },
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
    return res.status(201).json({ message: "Car successfully updated!!" });
  } catch (error) {
    return res.status(400).json({ error, message: "Error updating car" });
  }
};

export default updateCarController;

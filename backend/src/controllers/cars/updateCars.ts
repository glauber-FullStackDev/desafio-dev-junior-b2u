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
        brands: {
          update: {
            brand: req.body.brand,
          },
        },
        users: {
          update: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
          },
        },
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

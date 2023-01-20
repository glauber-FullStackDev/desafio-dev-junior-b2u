
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const deleteCarController = async (req: Request, res: Response) => {
  try {
    await prisma.cars.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.status(201).json({ message: "Car successfully deleted!!" });
  } catch (error) {
    return res.status(400).json({ message: "Error deleting car" });
  }
};

export default deleteCarController;
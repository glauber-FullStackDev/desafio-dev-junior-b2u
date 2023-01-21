import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import allBrandsServices from "../../services/brands/all-brands-service";

const prisma = new PrismaClient();

const allBrandsController = async (req: Request, res: Response) => {
  const response = await allBrandsServices();
  if ((response.statusCode = 201)) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default allBrandsController;

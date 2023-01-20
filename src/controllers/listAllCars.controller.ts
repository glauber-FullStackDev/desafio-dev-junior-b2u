import { Request, Response } from "express";
import { listAllCarsService } from "../services/listAllCars.service";

export const listAllCarsController = async (req: Request, res: Response) => {
  const carsList = await listAllCarsService();
  return res.status(200).json(carsList);
};

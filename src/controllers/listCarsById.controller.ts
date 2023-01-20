import { Request, Response } from "express";
import { listCarByIdService } from "../services/listCarById.service";

export const listCarsByIdController = async (
  req: Request,
  res: Response
) => {
  const { carId } = req.params;

  const productFind = await listCarByIdService(carId);

  return res.json(productFind);
};

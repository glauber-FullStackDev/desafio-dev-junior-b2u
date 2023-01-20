import { Request, Response } from "express";
import { deleteCarByIdService } from "../services/deleteCarById.service";

export const deleteCarByIdController = async (
  req: Request,
  res: Response
) => {
  const { carId } = req.params;

  const carDeleted = await deleteCarByIdService(carId);

  return res.json({ message: "Car deleted with success" });
};

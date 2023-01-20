import { Request, Response } from "express";
import { listCarByOwnerIdService } from "../services/listCarByOwnerId.service";

export const listCarsByOwnerIdController = async (
  req: Request,
  res: Response
) => {
  const { ownerId } = req.params;

  const carsFind = await listCarByOwnerIdService(ownerId);

  return res.json(carsFind);
};

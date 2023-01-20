import { Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ICarCreate, ICarResponse } from "../interfaces/car.interface";
import { createCarService } from "../services/createCar.service";

export const createProductController = async (req: Request, res: Response) => {
  const { name, brand, price, description, owner }: ICarCreate = req.body;

  const newCar = await createCarService({
    name,
    brand,
    price,
    description,
    owner,
  });

  return res
    .status(201)
    .json({ message: "Car created with success", car: newCar });
};

export default createProductController;

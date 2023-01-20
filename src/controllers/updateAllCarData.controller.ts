import { Request, Response } from "express";
import { ICarUpdate } from "../interfaces/car.interface";
import { updateCarDataService } from "../services/updateCarData.service";

export const updateCarDataController = async (req: Request, res: Response) => {
  const { carId } = req.params;

  const { name, brand, description, price, year, owner }: ICarUpdate = req.body;
  const editedCar = await updateCarDataService(
    { name, brand, description, price, year, owner },
    carId
  );
  return res.status(200).json({
    message: "Car Updated",
    product: editedCar,
  });
};

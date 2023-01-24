import { Request, Response } from "express";
import allCarsService from "../../services/cars/all-cars-service";

const allCarsController = async (req: Request, res: Response) => {
  const response = await allCarsService();
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default allCarsController;

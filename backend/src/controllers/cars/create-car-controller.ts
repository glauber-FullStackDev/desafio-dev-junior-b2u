import { Request, Response } from "express";
import createCarsService from "../../services/cars/create-car-service";

const createCarController = async (req: Request, res: Response) => {
  const response = await createCarsService(req.body);

  if (response.statusCode === 201) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default createCarController;

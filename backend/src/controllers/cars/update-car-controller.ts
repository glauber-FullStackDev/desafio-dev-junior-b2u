import { Request, Response } from "express";
import updateCarsService from "../../services/cars/update-car-service";

const updateCarController = async (req: Request, res: Response) => {
  const response = await updateCarsService(req.params.id, req.body);

  console.log(response);
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default updateCarController;

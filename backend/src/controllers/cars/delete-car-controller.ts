import { Request, Response } from "express";
import deleteCarService from "../../services/cars/delete-car-service";

const deleteCarController = async (req: Request, res: Response) => {
  const response = await deleteCarService(req.params.id);
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default deleteCarController;

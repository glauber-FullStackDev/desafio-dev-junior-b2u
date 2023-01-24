import { Request, Response } from "express";
import createBrandService from "../../services/brands/create-brand-service";

const createBrandController = async (req: Request, res: Response) => {
  const response = await createBrandService(req.body);

  if (response.statusCode === 201) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default createBrandController;

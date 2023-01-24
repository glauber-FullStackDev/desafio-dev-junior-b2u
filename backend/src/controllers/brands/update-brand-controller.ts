import { Request, Response } from "express";
import updateBrandService from "../../services/brands/update-brand-service";

const updateBrandController = async (req: Request, res: Response) => {
  const response = await updateBrandService(req.params.id, req.body);

  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default updateBrandController;

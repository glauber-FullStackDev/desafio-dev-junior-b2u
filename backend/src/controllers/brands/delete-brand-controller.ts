import { Request, Response } from "express";
import deleteBrandService from "../../services/brands/delete-brand-service";

const deleteBrandController = async (req: Request, res: Response) => {
  const response = await deleteBrandService(req.params.id);
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default deleteBrandController;

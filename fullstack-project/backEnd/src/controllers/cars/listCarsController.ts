import { Request, Response } from "express";
import listCarsService from "../../services/cars/listCarsService";

const listCarsController = async (request: Request, response: Response) => {
  try {
    const listProducts = await listCarsService();
    return response.status(200).json(listProducts);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
};

export default listCarsController;

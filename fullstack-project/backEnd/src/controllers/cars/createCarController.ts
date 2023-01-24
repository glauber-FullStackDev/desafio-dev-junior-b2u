import { Request, Response } from "express";
import createCarService from "../../services/cars/createCarService";

const createCarController = async (request: Request, response: Response) => {
  try {
    const data = request.body;
    const id = request.user.id;
    const user = await createCarService(data, id);

    return response.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
};
export default createCarController;

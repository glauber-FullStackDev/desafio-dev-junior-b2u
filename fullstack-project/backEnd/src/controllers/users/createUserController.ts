import { Request, Response } from "express";
import createUserService from "../../services/users/createUserService";

const createUserController = async (request: Request, response: Response) => {
  try {
    const data = request.body;
    const user = await createUserService(data);

    return response.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
};
export default createUserController;

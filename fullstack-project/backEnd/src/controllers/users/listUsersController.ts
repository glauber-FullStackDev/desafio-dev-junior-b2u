import { Request, Response } from "express";
import listUsersService from "../../services/users/listUsersService";

const listUsersController = async (request: Request, response: Response) => {
  try {
    const listUser = await listUsersService();
    return response.status(200).json(listUser);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
};
export default listUsersController;

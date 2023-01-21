import { Request, Response } from "express";
import allUsersService from "../../services/users/all-users-service";

const allUsersController = async (req: Request, res: Response) => {
  const response = await allUsersService();
  if (response.statusCode === 201) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default allUsersController;

import { Request, Response } from "express";
import createUserService from "../../services/users/create-user-service";

const createUserController = async (req: Request, res: Response) => {
  const response = await createUserService(req.body);

  if (response.statusCode === 201) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default createUserController;

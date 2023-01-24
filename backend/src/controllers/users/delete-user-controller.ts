import { Request, Response } from "express";
import deleteUserService from "../../services/users/delete-user-service";

const deleteUserController = async (req: Request, res: Response) => {
  const response = await deleteUserService(req.params.id);
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default deleteUserController;

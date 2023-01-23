import { Request, Response } from "express";
import updateUserService from "../../services/users/update-user-service";

const updateUserController = async (req: Request, res: Response) => {
  const response = await updateUserService(req.params.id, req.body);

  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default updateUserController;

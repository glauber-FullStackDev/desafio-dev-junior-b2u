import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUserService";

const deleteUserController = async (request: Request, response: Response) => {
  const idToken = request.user.id;
  const idParams = request.params.user_id;
  const userDelete = await deleteUserService(idToken, idParams);
  return response.status(204).send({
    message: "User deleted with succes",
  });
};
export default deleteUserController;

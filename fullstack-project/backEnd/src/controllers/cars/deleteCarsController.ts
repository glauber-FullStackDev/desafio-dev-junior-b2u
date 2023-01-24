import { Request, Response } from "express";
import deleteCarsService from "../../services/cars/deleteCarsService";

const deleteCarController = async (request: Request, response: Response) => {
  const idToken: any = request.user.id;
  const idParams = request.params.car_id;

  const userDelete = await deleteCarsService(idToken, idParams);

  return response.status(204).send({
    message: "User deleted with succes",
  });
};
export default deleteCarController;

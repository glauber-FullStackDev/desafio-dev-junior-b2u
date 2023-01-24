import { Request, Response } from "express";
import updateCarsServie from "../../services/cars/updateCarsService";

const updateCarsController = async (request: Request, response: Response) => {
  try {
    const idToken: any = request.user.id;
    const data = request.body;
    const idCar = request.params.car_id;
    const carUpdate = await updateCarsServie(data, idCar, idToken);

    return response.status(200).json(carUpdate);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
};
export default updateCarsController;

import { Response, Request } from "express";
import { Car } from "../models/Car";
import { CarRepository } from "../repositories/CarRepository";
import { EditCarService } from "../services/EditCarService";

const carRepository = CarRepository.getInstance();
const editCarService = new EditCarService(carRepository);

class EditCarController {

  handle(req: Request, res: Response): Response{

    const data = req.body;

    if(!data){
			res.json({ message: "Error" }).status(401);
    }

    const result = editCarService.execute(data);

    return res.json(result);

  }

}

export { EditCarController };

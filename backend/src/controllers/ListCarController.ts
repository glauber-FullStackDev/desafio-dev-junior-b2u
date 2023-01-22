import { Request, Response } from "express";
import { ListCarService } from "../services/ListCarService";
import { CarRepository } from "../repositories/CarRepository";

const carRepository = CarRepository.getInstance();
const listCarService = new ListCarService(carRepository);

class ListCarController {
	 handle(req: Request, res: Response): Response {


    const result =  listCarService.execute();

    return res.json(result);
	}


}

export { ListCarController };

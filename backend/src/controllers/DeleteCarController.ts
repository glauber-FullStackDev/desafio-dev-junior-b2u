import { Request, Response } from "express";
import { DeleteCarService } from "../services/DeleteCarService";
import { CarRepository } from "../repositories/CarRepository";

const carRepository = CarRepository.getInstance();
const deleteCarService = new DeleteCarService(carRepository);

class DeleteCarController {

  handle(req: Request, res: Response): Response {

    const id = req.query.id as string;

    if (!id) {
      res.json({ error: "ID is required" }).status(401);
    }

    const result = deleteCarService.execute(id);

    return res.json(result);


  }

}

export { DeleteCarController };

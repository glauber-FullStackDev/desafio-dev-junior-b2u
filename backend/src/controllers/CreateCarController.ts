import { Response, Request } from "express";
import { GetSchema } from "../schemas/CarSchema";
import { CreateCarService } from "../services/CreateCarService";
import { CarRepository } from "../repositories/CarRepository";

const carRepository = CarRepository.getInstance();
const createCarService = new CreateCarService(carRepository);

class CreateCarController {

  async handle(req: Request, res: Response): Promise<Response> {

    try {
      const {
        nameCar,
        brandCar,
        year,
        description,
        owner,
        email,
        phone,
      } = req.body;

      await GetSchema.validate({
        nameCar,
        brandCar,
        year,
        description,
        owner,
        email,
        phone,
      });

      const result = createCarService.execute({
        nameCar,
        brandCar,
        year,
        description,
        owner,
        email,
        phone,
      });

      return res.json(result);

    } catch (error) {

      console.log(error);
      res.json({ error: error.message });

    }

  }

}

export { CreateCarController };

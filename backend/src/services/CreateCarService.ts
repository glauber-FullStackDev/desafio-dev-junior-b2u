import { Car } from "../models/Car";
import { ICarRepository } from "../repositories/ICarRepository";

class CreateCarService {

  constructor (private carRepository: ICarRepository) { }

  execute(Data: Car): Car{

    const create = this.carRepository.create(Data);

    return create;

  }
}

export { CreateCarService };

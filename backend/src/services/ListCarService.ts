import { ICarRepository } from "../repositories/ICarRepository";
import { Car } from "../models/Car";

class ListCarService {

  constructor(private carRepository: ICarRepository) { }

  execute(): Car[]{

    const cars = this.carRepository.list();

    return cars;
  }
}

export { ListCarService };

import { Car } from "../models/Car";
import { ICarRepository } from "../repositories/ICarRepository";

class EditCarService {
  constructor(private carRepository: ICarRepository) { }

  execute(data: Car): Car{

    const car = this.carRepository.find(data.id);

    if(!car){
      throw new Error("Car not found");
    }

    const result = this.carRepository.edit(data);

    return result;

  }
}

export { EditCarService };

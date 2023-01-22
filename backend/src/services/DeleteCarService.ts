import { ICarRepository } from "../repositories/ICarRepository";

class DeleteCarService {
  constructor(private carRepository: ICarRepository) { }

  execute(id: string): void {

    const result = this.carRepository.delete(id);

    return result;

  }


}

export { DeleteCarService };

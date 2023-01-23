import { AddCarRepository } from '../../../../data/protocols/car/add-car-repository'
import { AddCar, AddCarParams } from '../../../../domain/use-cases/car/add-car'

export class DbAddCar implements AddCar {
  private readonly addCarRepository: AddCarRepository

  constructor (addCarRepository: AddCarRepository) {
    this.addCarRepository = addCarRepository
  }

  async add (ownerData: AddCarParams): Promise<void> {
    await this.addCarRepository.add(ownerData)
  }
}

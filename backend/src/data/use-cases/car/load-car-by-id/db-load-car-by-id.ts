import { LoadCarByIdRepository } from '../../../../data/protocols/car/load-car-by-id-repository'
import { CarModel } from '../../../../domain/models/car'
import { LoadCarById } from '../../../../domain/use-cases/car/load-car-by-id'

export class DbLoadCarById implements LoadCarById {
  private readonly loadCarByIdRepository: LoadCarByIdRepository

  constructor (loadCarByIdRepository: LoadCarByIdRepository) {
    this.loadCarByIdRepository = loadCarByIdRepository
  }

  async loadCarById (id: string): Promise<CarModel> {
    const car = await this.loadCarByIdRepository.loadById(id)
    return car
  }
}

import { LoadCarsRepository } from '../../../../data/protocols/car/load-cars-repository'
import { CarModel } from '../../../../domain/models/car'
import { LoadCars } from '../../../../domain/use-cases/car/load-cars'

export class DbLoadCars implements LoadCars {
  private readonly loadCarsRepository: LoadCarsRepository

  constructor (loadCarsRepository: LoadCarsRepository) {
    this.loadCarsRepository = loadCarsRepository
  }

  async loadAll (): Promise<CarModel[]> {
    const cars = await this.loadCarsRepository.loadAll()
    return cars
  }
}

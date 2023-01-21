import { UpdateCarByIdRepository } from '../../../../data/protocols/car/update-car-by-id-repository'
import { UpdateCarById, UpdateCarRawData } from '../../../../domain/use-cases/car/update-car-by-id'

export class DbUpdateCarById implements UpdateCarById {
  private readonly updateCarByIdRepository: UpdateCarByIdRepository

  constructor (updateCarByIdRepository: UpdateCarByIdRepository) {
    this.updateCarByIdRepository = updateCarByIdRepository
  }

  async updateById (id: string, raw: UpdateCarRawData): Promise<void> {
    await this.updateCarByIdRepository.updateById(id, raw)
  }
}

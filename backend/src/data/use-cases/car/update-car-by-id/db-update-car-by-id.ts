import { UpdateCarByIdRepository } from '../../../../data/protocols/car/update-car-by-id-repository'
import { CarData, OwnerData, UpdateCarById } from '../../../../domain/use-cases/car/update-car-by-id'

export class DbUpdateCarById implements UpdateCarById {
  private readonly updateCarByIdRepository: UpdateCarByIdRepository

  constructor (updateCarByIdRepository: UpdateCarByIdRepository) {
    this.updateCarByIdRepository = updateCarByIdRepository
  }

  async updateById (
    id: string,
    car: CarData,
    owner: OwnerData,
    onwer_id: string
  ): Promise<void> {
    await this.updateCarByIdRepository.updateById(id, car, owner, onwer_id)
  }
}

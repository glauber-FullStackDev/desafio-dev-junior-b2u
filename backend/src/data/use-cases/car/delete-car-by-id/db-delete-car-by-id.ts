import { DeleteCarByIdRepository } from '../../../../data/protocols/car/delete-by-id-repository'
import { DeleteCarById } from '../../../../domain/use-cases/car/delete-car-by-id'

export class DbDeleteCarById implements DeleteCarById {
  private readonly deleteCarByIdRepository: DeleteCarByIdRepository

  constructor (deleteCarByIdRepository: DeleteCarByIdRepository) {
    this.deleteCarByIdRepository = deleteCarByIdRepository
  }

  async deleteById (id: string): Promise<void> {
    await this.deleteCarByIdRepository.deleteById(id)
  }
}

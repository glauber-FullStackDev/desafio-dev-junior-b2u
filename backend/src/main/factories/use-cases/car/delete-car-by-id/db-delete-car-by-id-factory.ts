import { DbDeleteCarById } from '../../../../../data/use-cases/car/delete-car-by-id/db-delete-car-by-id'
import { TypeOrmCarRepository } from '../../../../../infra/db/typeorm/repositories/typeorm-car-repository'

export const makeDbDeleteCarById = (): DbDeleteCarById => {
  const typeOrmCarRepository = new TypeOrmCarRepository()
  return new DbDeleteCarById(typeOrmCarRepository)
}

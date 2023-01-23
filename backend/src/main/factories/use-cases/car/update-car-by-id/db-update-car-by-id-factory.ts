import { DbUpdateCarById } from '../../../../../data/use-cases/car/update-car-by-id/db-update-car-by-id'
import { TypeOrmCarRepository } from '../../../../../infra/db/typeorm/repositories/typeorm-car-repository'

export const makeDbUpdateCarById = (): DbUpdateCarById => {
  const typeOrmCarRepository = new TypeOrmCarRepository()
  return new DbUpdateCarById(typeOrmCarRepository)
}

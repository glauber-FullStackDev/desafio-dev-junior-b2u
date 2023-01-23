import { DbLoadCarById } from '../../../../../data/use-cases/car/load-car-by-id/db-load-car-by-id'
import { TypeOrmCarRepository } from '../../../../../infra/db/typeorm/repositories/typeorm-car-repository'

export const makeDbLoadCarById = (): DbLoadCarById => {
  const typeOrmCarRepository = new TypeOrmCarRepository()
  return new DbLoadCarById(typeOrmCarRepository)
}

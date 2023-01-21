import { DbLoadCars } from '../../../../../data/use-cases/car/load-cars/db-load-cars'
import { TypeOrmCarRepository } from '../../../../../infra/db/typeorm/repositories/typeorm-car-repository'

export const makeDbLoadCars = (): DbLoadCars => {
  const typeOrmCarRepository = new TypeOrmCarRepository()
  return new DbLoadCars(typeOrmCarRepository)
}

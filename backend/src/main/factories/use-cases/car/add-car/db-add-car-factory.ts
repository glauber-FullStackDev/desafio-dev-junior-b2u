import { DbAddCar } from '../../../../../data/use-cases/car/add-car/db-add-car'
import { TypeOrmCarRepository } from '../../../../../infra/db/typeorm/repositories/typeorm-car-repository'

export const makeDbAddCar = (): DbAddCar => {
  const typeOrmCarRepository = new TypeOrmCarRepository()
  return new DbAddCar(typeOrmCarRepository)
}

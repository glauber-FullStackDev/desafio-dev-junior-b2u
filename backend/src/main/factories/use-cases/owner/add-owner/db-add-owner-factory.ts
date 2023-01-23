import { DbAddOwner } from '../../../../../data/use-cases/owner/add-owner/db-add-owner'
import { TypeOrmOwnerRepository } from '../../../../../infra/db/typeorm/repositories/typeorm-owner-repository'

export const makeDbAddOwner = (): DbAddOwner => {
  const typeOrmOwnerRepository = new TypeOrmOwnerRepository()
  return new DbAddOwner(typeOrmOwnerRepository, typeOrmOwnerRepository)
}

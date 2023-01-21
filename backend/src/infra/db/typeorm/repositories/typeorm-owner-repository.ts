import { AddOwnerRepository } from 'data/protocols/owner/add-owner-repository'
import { LoadOwnerByEmailRepository } from 'data/protocols/owner/load-owner-by-email'
import { OwnerModel } from 'domain/models/owner'
import { AddOwnerParams } from 'domain/use-cases/owner/add-owner'
import { TypeOrmOwner } from '../entities/typeorm-owner'
import { AppDataSource } from '../helper/app-data-source'

export class TypeOrmOwnerRepository implements AddOwnerRepository, LoadOwnerByEmailRepository {
  async add (ownerData: AddOwnerParams): Promise<OwnerModel> {
    const owner = new TypeOrmOwner()
    owner.owner_name = ownerData.owner_name
    owner.email = ownerData.email
    owner.telephone = ownerData.telephone

    const result = await AppDataSource.getInstance()
        .getRepository(TypeOrmOwner)
        .save(owner)

    return result
  }

  async loadByEmail (email: string): Promise<OwnerModel> {
    const result = await AppDataSource.getInstance()
    .getRepository(TypeOrmOwner)
    .createQueryBuilder('owner')
    .where('owner.email= :email', { email })
    .getOne()

    return result
  }
}

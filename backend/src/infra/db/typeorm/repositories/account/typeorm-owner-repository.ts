import { AddOwnerRepository } from 'data/protocols/owner/add-owner-repository'
import { OwnerModel } from 'domain/models/owner'
import { AddOwnerParams } from 'domain/use-cases/owner/add-owner'
import { TypeOrmOwner } from '../../entities/typeorm-owner'
import { AppDataSource } from '../../helper/app-data-source'

export class TypeOrmOwnerRepository implements AddOwnerRepository {
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
}

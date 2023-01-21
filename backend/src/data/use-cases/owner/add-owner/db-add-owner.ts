import { AddOwner, AddOwnerParams } from '../../../../domain/use-cases/owner/add-owner'
import { AddOwnerRepository } from '../../../../data/protocols/owner/add-owner-repository'
import { OwnerModel } from '../../../../domain/models/owner'
import { LoadOwnerByEmailRepository } from '../../../../data/protocols/owner/load-owner-by-email'

export class DbAddOwner implements AddOwner {
  private readonly addOwnerRepository: AddOwnerRepository
  private readonly loadOwnerByEmail: LoadOwnerByEmailRepository

  constructor (
    addOwnerRepository: AddOwnerRepository,
    loadOwnerByEmail: LoadOwnerByEmailRepository
  ) {
    this.addOwnerRepository = addOwnerRepository
    this.loadOwnerByEmail = loadOwnerByEmail
  }

  async add (ownerData: AddOwnerParams): Promise<OwnerModel> {
    const ownerByEmail = await this.loadOwnerByEmail.loadByEmail(ownerData.email)

    if (!ownerByEmail) {
      const owner = await this.addOwnerRepository.add(ownerData)
      return owner
    }

    return null
  }
}

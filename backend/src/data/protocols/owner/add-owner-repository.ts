import { AddOwnerParams } from '../../../domain/use-cases/owner/add-owner'
import { OwnerModel } from '../../../domain/models/owner'

export interface AddOwnerRepository {
  add: (addOwnerParams: AddOwnerParams) => Promise<OwnerModel>
}

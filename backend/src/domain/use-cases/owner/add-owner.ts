import { OwnerModel } from '../../../domain/models/owner'

export type AddOwnerParams = {
  owner_name: string
  email: string
  telephone: string
}

export interface AddOwner {
  add: (ownerData: AddOwnerParams) => Promise<OwnerModel>
}

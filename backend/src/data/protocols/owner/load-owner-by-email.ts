import { OwnerModel } from '../../../domain/models/owner'

export interface LoadOwnerByEmailRepository {
  loadByEmail: (email: string) => Promise<OwnerModel>
}

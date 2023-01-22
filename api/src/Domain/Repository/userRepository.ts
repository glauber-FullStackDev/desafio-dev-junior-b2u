import { User } from '../Entities/User'
export interface IDeleteResponse {
  acknowledged: boolean
  deletedCount: number
}
export interface IUpdateResponse {
  acknowledged: boolean
  modifiedCount: number
  upsertedId: Object | null
  upsertedCount: number
  matchedCount: number
}
export interface IUserRepository {
  create: (user: User) => Promise<void>
  readByEmail: (email: string) => Promise<User | Error>
  findById: (id: string) => Promise<User | Error>
  checkIfExists: (email: string) => Promise<boolean>
  checkIfExistsById: (email: string) => Promise<boolean>
  getAll: () => Promise<User[]>
  update: (id: string, body: unknown) => Promise<IUpdateResponse>
  delete: (id: string) => Promise<IDeleteResponse>
}

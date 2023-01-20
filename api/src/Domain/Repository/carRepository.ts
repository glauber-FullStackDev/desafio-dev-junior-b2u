import { Car } from '../Entities/Car'

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

export interface ICarRepository {
  create: (Client: Car) => Promise<void>
  readById: (id: string) => Promise<Car>
  getAll: () => Promise<Car[]>
  update: (id: string, body: unknown) => Promise<IUpdateResponse>
  delete: (id: string) => Promise<IDeleteResponse>
}

export interface DeleteCarByIdRepository {
  deleteById: (id: string) => Promise<void>
}

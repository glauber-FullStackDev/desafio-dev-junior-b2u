export interface DeleteCarById {
  deleteById: (id: string) => Promise<void>
}

export type UpdateCarRawData = {
  name?: string
  brand?: string
  manufactureYear?: number
  description?: string
}

export interface UpdateCarById {
  updateById: (id: string, raw: UpdateCarRawData) => Promise<void>
}

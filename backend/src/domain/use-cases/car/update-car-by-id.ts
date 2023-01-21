export interface UpdateCarRawData {
  name?: string
  brand?: string
  manufactureYear?: number
  description?: string
}

export interface UpdateCar {
  updateById: (id: string, raw: UpdateCarRawData) => Promise<void>
}

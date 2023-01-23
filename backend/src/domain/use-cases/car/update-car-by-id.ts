export type CarData = {
  name?: string
  brand?: string
  manufactureYear?: number
  description?: string
}

export type OwnerData = {
  owner_name?: string
  email?: string
  telephone?: string
}

export interface UpdateCarById {
  updateById: (id: string, car: CarData, owner: OwnerData, owner_id: string) => Promise<void>
}

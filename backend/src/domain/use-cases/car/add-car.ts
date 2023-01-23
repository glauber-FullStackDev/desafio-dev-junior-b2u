export interface AddCarParams {
  name: string
  brand: string
  manufactureYear: number
  description: string
  owner: any
}

export interface AddCar {
  add: (carData: AddCarParams) => Promise<void>
}

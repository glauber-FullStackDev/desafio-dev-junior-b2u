import { BaseEntity } from "./base.entity";

interface VehicleInterface {
  name: string
  brand: string
  year: number
  description: string
}

class Vehicle extends BaseEntity implements Partial<VehicleInterface> {
  name: string | undefined
  brand: string | undefined
  year: number | undefined
  description: string | undefined
}

export { Vehicle, VehicleInterface };

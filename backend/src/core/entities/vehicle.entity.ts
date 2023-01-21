import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

interface Vehicle {
  name: string
  brand: string
  year: number
  description: string
  user?: User
}

// class Vehicle extends BaseEntity implements Partial<VehicleInterface> {
//   name: string | undefined
//   brand: string | undefined
//   year: number | undefined
//   description: string | undefined
// }

export { Vehicle };

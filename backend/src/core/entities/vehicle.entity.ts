import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

interface Vehicle {
  name: string
  brand: string
  year: number
  description: string
  price: number
  user?: User
}


export { Vehicle };

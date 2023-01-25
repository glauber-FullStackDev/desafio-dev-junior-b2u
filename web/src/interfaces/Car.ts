import { User } from "./User"

export interface Car {
    id?: string 
    name: string
    brand: string
    year_manufacture: number
    description: string
    image: string | File
    userId?: string,
    User?: User
}

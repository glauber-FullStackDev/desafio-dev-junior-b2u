import { ObjectId } from 'mongodb'
import { IUser } from './User'

export interface ICar {
  id?: string
  _id?: ObjectId
  name: string
  brand: string
  fabricationDate: string
  description: string
  owner: IUser
}

export class Car {
  name: string
  brand: string
  fabricationDate: string
  description: string
  owner: IUser

  constructor (car: ICar) {
    const { name, brand, fabricationDate, description, owner } = car
    this.name = name
    this.brand = brand
    this.fabricationDate = fabricationDate
    this.description = description
    this.owner = owner
  }
}

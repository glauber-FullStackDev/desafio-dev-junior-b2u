import { ObjectId } from 'mongodb'

export interface ICar {
  id?: string
  _id?: ObjectId
  name: string
  imageUrl?: string
  brand: string
  fabricationDate: string
  description: string
  ownerId: string
}

export class Car {
  name: string
  imageUrl?: string
  brand: string
  fabricationDate: string
  description: string
  ownerId: string

  constructor (car: ICar) {
    const { name, brand, imageUrl, fabricationDate, description, ownerId } = car
    this.name = name
    this.brand = brand
    this.imageUrl = imageUrl
    this.fabricationDate = fabricationDate
    this.description = description
    this.ownerId = ownerId
  }
}

import { ObjectId } from 'mongodb'

export interface IUser {
  id?: string
  _id?: ObjectId
  name: string
  imageUrl?: string
  email: string
  phoneNumber: string
  password: string
}

export class User {
  name: string
  imageUrl?: string
  email: string
  phoneNumber: string
  password: string

  constructor (user: IUser) {
    const { name, email, imageUrl, phoneNumber, password } = user
    this.name = name
    this.imageUrl = imageUrl
    this.email = email
    this.phoneNumber = phoneNumber
    this.password = password
  }
}

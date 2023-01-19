import { ObjectId } from 'mongodb'

export interface IUser {
  id?: string
  _id?: ObjectId
  name: string
  email: string
  phoneNumber: string
}

export class User {
  name: string
  email: string
  phoneNumber: string

  constructor (client: IUser) {
    const { name, email, phoneNumber } = client
    this.name = name
    this.email = email
    this.phoneNumber = phoneNumber
  }
}

import { IUser } from '../Domain/Entities/User'
import { MongoClient, ObjectId } from 'mongodb'
import { IUserRepository } from '../Domain/Repository/userRepository'
import CustomError from '../helpers/customError'
import { IDeleteResponse } from '../Domain/Repository/carRepository'

export class UserRepository implements IUserRepository {
  private readonly mongoClient: MongoClient
  dbName: string

  constructor (dbName: string, mongoClient: MongoClient) {
    this.mongoClient = mongoClient
    this.dbName = dbName
  }

  public async create (user: IUser): Promise<void> {
    const db = this.mongoClient.db(this.dbName)
    await db.collection('Users').insertOne(user)
    await db.collection('Users').createIndex({ email: 1 }, { unique: true })
  }

  public async readByEmail (input: string): Promise<IUser> {
    const db = this.mongoClient.db(this.dbName)
    const response = await db.collection('Users').findOne({ email: input }) as IUser
    if (response === null) throw new CustomError('Usuário não encontrado', 404)
    const { _id, ...user } = response
    return { id: _id?.toHexString(), ...user }
  }

  public async getAll (): Promise<IUser[]> {
    const db = this.mongoClient.db(this.dbName)
    const result: IUser[] = []
    await db.collection('Users').find().forEach((doc: any) => {
      const { _id, name, phoneNumber, imageUrl, email, password } = doc
      result.push({ id: _id?.toHexString(), name, phoneNumber, imageUrl, email, password })
    })
    return result
  }

  public async update (id: string, body: any): Promise<any> {
    const db = this.mongoClient.db(this.dbName)
    try {
      const response = await db
        .collection('Users')
        .updateOne({ _id: new ObjectId(id) }, { $set: body })
      return response
    } catch ({ code, message }) {
      if (code === 11000) throw new CustomError('valor igual ao atual!', 400)
      throw new CustomError('Erro inesperado!', 500)
    }
  }

  public async delete (id: string): Promise<IDeleteResponse> {
    const db = this.mongoClient.db(this.dbName)
    const response = await db.collection('Users').deleteOne({ _id: new ObjectId(id) })
    return response
  }
}

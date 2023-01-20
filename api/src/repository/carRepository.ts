import { ICar } from '../Domain/Entities/Car'
import { MongoClient, ObjectId } from 'mongodb'
import { ICarRepository, IDeleteResponse } from '../Domain/Repository/carRepository'
import CustomError from '../helpers/customError'

export class CarRepository implements ICarRepository {
  private readonly mongoClient: any
  dbName: string

  constructor (dbName: string, mongoClient: MongoClient) {
    this.mongoClient = mongoClient
    this.dbName = dbName
  }

  public async create (client: ICar): Promise<void> {
    const db = this.mongoClient.db(this.dbName)
    try {
      const result = await db.collection('Cars').insertOne(client)
      return result
    } catch ({ code, message }) {
      if (code === 11000) throw new CustomError('Cliente já cadastrado!', 409)
      throw new CustomError('Erro inesperado!', 500)
    }
  }

  public async readById (id: string): Promise<ICar> {
    const db = this.mongoClient.db(this.dbName)
    const result = await db.collection('Cars').findOne({ _id: new ObjectId(id) })
    return result
  }

  public async getAll (): Promise<ICar[]> {
    const db = this.mongoClient.db(this.dbName)
    const result: ICar[] = []
    await db.collection('Cars').find().forEach((doc: ICar) => {
      const { _id, name, brand, imageUrl, fabricationDate, ownerId, description } = doc
      result.push({ id: _id?.toHexString(), name, brand, imageUrl, fabricationDate, ownerId, description })
    })
    return result
  }

  public async update (id: string, body: any): Promise<any> {
    const db = this.mongoClient.db(this.dbName)
    try {
      const response = await db
        .collection('Cars')
        .updateOne({ _id: new ObjectId(id) }, { $set: body })
      return response
    } catch ({ code, message }) {
      if (code === 11000) throw new CustomError('valor igual ao atual!', 400)
      throw new CustomError('Erro inesperado!', 500)
    }
  }

  public async delete (id: string): Promise<IDeleteResponse> {
    const db = this.mongoClient.db(this.dbName)
    const response = await db.collection('Cars').deleteOne({ _id: new ObjectId(id) })
    return response
  }
}

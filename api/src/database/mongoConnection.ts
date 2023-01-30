import 'dotenv/config'
import { MongoClient } from 'mongodb'

const mongoURL: any = process.env.MONGO_URL

export class MongoConnection {
  private readonly mongoClient: any

  constructor () {
    this.mongoClient = new MongoClient(mongoURL)
  }

  public getClient (): any {
    return this.mongoClient
  }
}

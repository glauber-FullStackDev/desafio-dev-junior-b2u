import { DataSource } from 'typeorm'
import { TypeOrmCar } from '../entities/typeorm-car'
import { TypeOrmOwner } from '../entities/typeorm-owner'

export class AppDataSource {
  private static instance: DataSource
  static getInstance (): DataSource {
    if (this.instance) return this.instance
    this.instance = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [TypeOrmCar, TypeOrmOwner],
      subscribers: [],
      migrations: []
    })

    return this.instance
  }
}

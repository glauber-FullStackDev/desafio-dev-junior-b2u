import { MongoClient } from 'mongodb'
import { MongoConnection } from '../database/mongoConnection'
import { User } from '../Domain/Entities/User'
import { UserRepository } from '../repository/userRepository.ts'
import { CreateUser } from './User/createUser'

const mongoClient: MongoClient = new MongoConnection().getClient()
const repository = new UserRepository('ShareEnergyDB', mongoClient)
const createUser = new CreateUser(repository)
const user = new User({ name: 'desafiosharenergy', password: 'sh@r3n3rgy' })
createUser.execute(user)
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message))

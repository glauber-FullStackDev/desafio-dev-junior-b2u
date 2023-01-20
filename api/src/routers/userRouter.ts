import { Router } from 'express'
import { CreateUser } from '../Aplication/User/createUser'
import { DeleteUser } from '../Aplication/User/deleteUser'
import { FindAllUsers } from '../Aplication/User/findAllUsers'
import { MongoConnection } from '../database/mongoConnection'
import { UserRepository } from '../repository/userRepository'

export const userRouter = Router()
const mongoClient = new MongoConnection().getClient()
const repository = new UserRepository('BitMotorsDB', mongoClient)
const createUser = new CreateUser(repository)
const findUsers = new FindAllUsers(repository)
const deleteUser = new DeleteUser(repository)

userRouter.post('/create', createUser.execute.bind(createUser))
userRouter.delete('/:id', deleteUser.execute.bind(deleteUser))
userRouter.patch('/:id', findUsers.execute.bind(findUsers))
userRouter.get('/findAll', findUsers.execute.bind(findUsers))

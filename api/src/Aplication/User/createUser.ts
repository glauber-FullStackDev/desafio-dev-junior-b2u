import { User } from '../../Domain/Entities/User'
import { IUserRepository } from '../../Domain/Repository/userRepository'
import bcrypt from 'bcrypt'
import Joi from 'joi'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'

export class CreateUser {
  constructor (readonly userRepository: IUserRepository) {
  }

  private encryptPassword (password: string): string {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  };

  private async validate (
    name: string,
    imageUrl: string = '',
    phoneNumber: string,
    password: string,
    email: string): Promise<Object | Error> {
    const schema = Joi.object({
      name: Joi.string().required(),
      password: Joi.string().min(8).required(),
      phoneNumber: Joi.string().min(11).required(),
      email: Joi.string().email().required(),
      imageUrl: Joi.string()
    })

    const { error, value } = schema.validate({ name, imageUrl, phoneNumber, password, email })
    if (error) throw new CustomError(error.message, 400)
    return value
  }

  async execute (req: Request, res: Response): Promise<Response> {
    const { name, imageUrl, phoneNumber, password, email } = req.body
    console.log(name, imageUrl, phoneNumber, email, password)

    await this.validate(name, imageUrl, phoneNumber, password, email)
    const encryptedPassword = this.encryptPassword(password)
    const user = new User({ name, password: encryptedPassword, imageUrl, phoneNumber, email })
    await this.userRepository.create(user)
    return res.status(201).json({ message: 'Success!' })
  }
}

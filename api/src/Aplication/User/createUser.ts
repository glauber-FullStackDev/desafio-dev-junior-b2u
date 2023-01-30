import { IUser, User } from '../../Domain/Entities/User'
import { IUserRepository } from '../../Domain/Repository/userRepository'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import Joi from 'joi'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'
import { unlink } from 'fs'
import path from 'path'

const secret: string = process.env.JWT_SECRET || 'fgdfgsdfghsh3132154654'

export class CreateUser {
  constructor (readonly userRepository: IUserRepository) {
  }

  private async createToken (user: IUser): Promise<string> {
    const { password, email } = user
    const payload = { data: { email, password } }
    const token = sign(payload, secret)
    return token
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
    const { name, phoneNumber, password, email } = JSON.parse(req.body.data)
    const exists = await this.userRepository.checkIfExists(email)
    const imageFileName = req.file?.filename
    const imageUrl = `http://localhost:5002/images/${imageFileName || ''}`
    const deletedImage = `${path.resolve('images')}/${imageFileName || ''}`
    if (exists) unlink(deletedImage, (err) => console.error(err))
    await this.validate(name, imageFileName, phoneNumber, password, email)
    const encryptedPassword = this.encryptPassword(password)
    const user = new User({ name, password: encryptedPassword, imageUrl, phoneNumber, email })
    await this.userRepository.create(user)
    const token = await this.createToken(user)
    return res.status(201).json({ token, ...user })
  }
}

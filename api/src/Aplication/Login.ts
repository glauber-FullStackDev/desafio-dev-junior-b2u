import { IUser, User } from '../Domain/Entities/User'
import { IUserRepository } from '../Domain/Repository/userRepository'
import 'dotenv/config'
import { sign } from 'jsonwebtoken'
import { Request, Response } from 'express'
import CustomError from '../helpers/customError'
import Joi from 'joi'
import bcrypt from 'bcrypt'

const secret: string = process.env.JWT_SECRET || 'fgdfgsdfghsh3132154654'

export class Login {
  constructor (readonly userRepository: IUserRepository) {
  }

  private async getUserByEmail (email: string): Promise<IUser | Error> {
    const user = await this.userRepository.readByEmail(email)
    return user
  }

  private async createToken (user: IUser): Promise<string> {
    const { password, email } = user
    const payload = { data: { email, password } }
    const token = sign(payload, secret)
    return token
  }

  private async validate (email: string, password: string): Promise<Object | Error> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    })
    const { error, value } = schema.validate({ email, password })
    if (error) throw new CustomError(error.message, 400)
    return value
  }

  private decryptPassword (password: string, encryptedPassword: string): boolean {
    return bcrypt.compareSync(password, encryptedPassword)
  };

  private async checkNameAndPassword (email: string, password: string): Promise<Object | Error> {
    const user = await this.getUserByEmail(email) as User
    const { email: userEmail, password: encryptedPassword } = user

    if (
      userEmail === email &&
      this.decryptPassword(password, encryptedPassword)
    ) {
      return { token: await this.createToken(user), ...user }
    }
    throw new CustomError('Usuário não cadastrado.', 404)
  }

  public async execute (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    await this.validate(email, password)
    const response = await this.checkNameAndPassword(email, password)
    return res.status(200).json({ ...response })
  }
}

import { IUserRepository } from '../../Domain/Repository/userRepository'
import { Request, Response } from 'express'
import { IUser } from '../../Domain/Entities/User'

export class FindAllUsers {
  constructor (readonly userRepository: IUserRepository) {
  }

  public async execute (_req: Request, res: Response): Promise<void> {
    const user: IUser[] = await this.userRepository.getAll()
    res.status(200).json(user)
  }
}

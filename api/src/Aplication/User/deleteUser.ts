import { IUserRepository } from '../../Domain/Repository/userRepository'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'

export class DeleteUser {
  constructor (readonly userRepository: IUserRepository) {
  }

  private validate (id: string): void {
    const isValidObjectId = ObjectId.isValid(id)
    if (!isValidObjectId) throw new CustomError('ID inválido!', 400)
  }

  public async execute (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    this.validate(id)
    const response = await this.userRepository.delete(id)
    if (response.deletedCount === 0) throw new CustomError('Usuário não encontrado!', 409)

    res.status(200).json({ message: 'sucesso!' })
  }
}

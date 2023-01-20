import { IUserRepository } from '../../Domain/Repository/userRepository'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'

export class UpdateUser {
  constructor (readonly userRepository: IUserRepository) {
  }

  private validateId (id: string): void {
    const isValidObjectId = ObjectId.isValid(id)
    if (!isValidObjectId) throw new CustomError('ID inválido!', 400)
  }

  public async execute (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    this.validateId(id)
    const response = await this.userRepository.update(id, req.body)
    if (response.modifiedCount === 0) throw new CustomError('Usuário não encontrado!', 409)

    res.status(200).json({ message: 'Sucesso!' })
  }
}

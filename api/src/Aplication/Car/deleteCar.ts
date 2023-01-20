import { ICarRepository } from '../../Domain/Repository/carRepository'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'

export class DeleteCar {
  constructor (readonly carRepository: ICarRepository) {
  }

  private validate (id: string): void {
    const isValidObjectId = ObjectId.isValid(id)
    if (!isValidObjectId) throw new CustomError('ID inválido!', 400)
  }

  public async execute (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    this.validate(id)
    const response = await this.carRepository.delete(id)
    if (response.deletedCount === 0) throw new CustomError('Cliente não encontrado!', 409)

    res.status(200).json({ message: 'sucesso!' })
  }
}

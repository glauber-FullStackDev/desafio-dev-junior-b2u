import { ICarRepository } from '../../Domain/Repository/carRepository'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { ICar } from '../../Domain/Entities/Car'

export class FindCar {
  constructor (readonly carRepository: ICarRepository) {
  }

  private validate (id: string): void {
    const isValidObjectId = ObjectId.isValid(id)
    if (!isValidObjectId) throw new CustomError('ID inválido!', 400)
  }

  public async execute (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    this.validate(id)
    const client: ICar = await this.carRepository.readById(id)
    const { _id, ...rest } = client
    res.status(200).json({
      car: {
        id: _id?.toHexString(),
        ...rest
      }
    })
  }
}

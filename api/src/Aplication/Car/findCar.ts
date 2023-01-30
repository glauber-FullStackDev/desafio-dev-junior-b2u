import { ICarRepository } from '../../Domain/Repository/carRepository'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { ICar } from '../../Domain/Entities/Car'
import { IUserRepository } from '../../Domain/Repository/userRepository'

export class FindCar {
  constructor (
    readonly carRepository: ICarRepository,
    readonly userRepository: IUserRepository
  ) {
  }

  private validate (id: string): void {
    const isValidObjectId = ObjectId.isValid(id)
    if (!isValidObjectId) throw new CustomError('ID inválido!', 400)
  }

  public async execute (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    this.validate(id)
    const car: ICar = await this.carRepository.readById(id)
    const owner = await this.userRepository.findById(car.ownerId)
    const { _id, ...rest } = car
    res.status(200).json({
      car: {
        id: _id?.toHexString(),
        ...rest,
        owner
      }
    })
  }
}

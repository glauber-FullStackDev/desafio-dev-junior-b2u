import { ICarRepository } from '../../Domain/Repository/carRepository'
import { Request, Response } from 'express'
import { ICar } from '../../Domain/Entities/Car'
import { IUserRepository } from '../../Domain/Repository/userRepository'
import CustomError from '../../helpers/customError'

export class FindCarsByOwner {
  constructor (
    readonly carRepository: ICarRepository,
    readonly userRepository: IUserRepository) {
  }

  public async execute (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const exists = await this.userRepository.checkIfExistsById(id)
    if (!exists) throw new CustomError('Usuário não encontrado!', 404)

    const cars: ICar[] = await this.carRepository.findByOwnerId(id)
    res.status(200).json(cars)
  }
}

import { ICarRepository } from '../../Domain/Repository/carRepository'
import { Request, Response } from 'express'
import { ICar } from '../../Domain/Entities/Car'

export class FindAllCars {
  constructor (readonly carRepository: ICarRepository) {
  }

  public async execute (_req: Request, res: Response): Promise<void> {
    const cars: ICar[] = await this.carRepository.getAll()
    res.status(200).json(cars)
  }
}

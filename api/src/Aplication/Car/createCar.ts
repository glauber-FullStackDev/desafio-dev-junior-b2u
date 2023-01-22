import { ICarRepository } from '../../Domain/Repository/carRepository'
import Joi from 'joi'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'
import { Car } from '../../Domain/Entities/Car'

export class CreateCar {
  constructor (readonly carRepository: ICarRepository) {
  }

  private async validate (
    name: string,
    imageUrl: string = '',
    brand: string,
    fabricationDate: string,
    description: string,
    ownerId: string
  ): Promise<Object | Error> {
    const schema = Joi.object({
      name: Joi.string().required(),
      imageUrl: Joi.string().required(),
      brand: Joi.string().required(),
      fabricationDate: Joi.string().required(),
      description: Joi.string().required(),
      ownerId: Joi.string().required()
    }).required()

    const { error, value } = schema.validate({ name, imageUrl, brand, fabricationDate, description, ownerId })
    if (error) throw new CustomError(error.message, 400)
    return value
  }

  async execute (req: Request, res: Response): Promise<void> {
    const { name, brand, fabricationDate, description, ownerId } = JSON.parse(req.body.data)
    const imageFileName = req.file?.filename
    const imageUrl = `http://localhost:5002/images/${imageFileName || ''}`
    await this.validate(name, imageUrl, brand, fabricationDate, description, ownerId)
    const client = new Car({
      name,
      brand,
      imageUrl,
      fabricationDate,
      description,
      ownerId
    })
    await this.carRepository.create(client)

    res.status(201).json({ message: 'Sucesso!' })
  }
}

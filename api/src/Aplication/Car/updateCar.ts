import { ICarRepository } from '../../Domain/Repository/carRepository'
import CustomError from '../../helpers/customError'
import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'

export class UpdateCar {
  constructor (readonly carRepository: ICarRepository) {
  }

  private validateId (id: string): void {
    const isValidObjectId = ObjectId.isValid(id)
    if (!isValidObjectId) throw new CustomError('ID inválido!', 400)
  }

  public async execute (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const { name, brand, imageUrl, fabricationDate, description } = JSON.parse(req.body.data)
    this.validateId(id)
    const imageFileName = req.file?.filename
    const image = imageFileName ? `http://localhost:5002/images/${imageFileName || ''}` : imageUrl

    console.log(imageFileName)
    console.log(imageUrl)
    const response = await this.carRepository.update(id, {
      name,
      brand,
      imageUrl: image,
      fabricationDate,
      description
    })
    if (response.modifiedCount === 0) throw new CustomError('Carro não encontrado!', 409)

    res.status(200).json({ message: 'Sucesso!' })
  }
}

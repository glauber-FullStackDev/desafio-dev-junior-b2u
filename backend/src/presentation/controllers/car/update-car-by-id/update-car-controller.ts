import { LoadCarById } from 'domain/use-cases/car/load-car-by-id'
import { UpdateCarById } from '../../../../domain/use-cases/car/update-car-by-id'
import { noContent, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class UpdateCarByIdController implements Controller {
  private readonly updateCar: UpdateCarById
  private readonly loadCarById: LoadCarById

  constructor (updateCar: UpdateCarById, loadCarById: LoadCarById) {
    this.updateCar = updateCar
    this.loadCarById = loadCarById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        id
      } = httpRequest.params

      const {
        name,
        brand,
        manufactureYear,
        description,
        owner_name,
        email,
        telephone
      } = httpRequest.body

      const car = await this.loadCarById.loadCarById(id)

      const carData = { name, brand, manufactureYear, description }
      const ownerData = { owner_name, email, telephone }

      await this.updateCar.updateById(id, carData, ownerData, car.owner.id)

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

import { UpdateCarById } from '../../../../domain/use-cases/car/update-car-by-id'
import { noContent, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class UpdateCarByIdController implements Controller {
  private readonly updateCar: UpdateCarById

  constructor (updateCar: UpdateCarById) {
    this.updateCar = updateCar
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        id
      } = httpRequest.params

      const updateData = httpRequest.body

      await this.updateCar.updateById(id, updateData)

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

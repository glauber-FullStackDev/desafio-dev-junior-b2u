import { DeleteCarById } from '../../../../domain/use-cases/car/delete-car-by-id'
import { noContent, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class DeleteCarByIdController implements Controller {
  private readonly deleteCar: DeleteCarById

  constructor (deleteCar: DeleteCarById) {
    this.deleteCar = deleteCar
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        id
      } = httpRequest.params

      await this.deleteCar.deleteById(id)

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

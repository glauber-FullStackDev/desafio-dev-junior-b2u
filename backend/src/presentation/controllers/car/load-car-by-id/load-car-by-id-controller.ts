import { LoadCarById } from '../../../../domain/use-cases/car/load-car-by-id'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class LoadCarByIdController implements Controller {
  private readonly loadCarById: LoadCarById

  constructor (loadCarById: LoadCarById) {
    this.loadCarById = loadCarById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const car = await this.loadCarById.loadCarById(id)

      return ok(car)
    } catch (err) {
      return serverError(err)
    }
  }
}

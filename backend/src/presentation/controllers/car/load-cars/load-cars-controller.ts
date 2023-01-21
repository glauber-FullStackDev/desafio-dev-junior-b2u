import { LoadCars } from '../../../../domain/use-cases/car/load-cars'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class UpdateCarByIdController implements Controller {
  private readonly loadCars: LoadCars

  constructor (loadCars: LoadCars) {
    this.loadCars = loadCars
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const cars = await this.loadCars.loadAll()

      return ok(cars)
    } catch (err) {
      return serverError(err)
    }
  }
}

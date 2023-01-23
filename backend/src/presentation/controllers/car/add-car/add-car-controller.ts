import { AddOwner } from 'domain/use-cases/owner/add-owner'
import { AddCar } from '../../../../domain/use-cases/car/add-car'
import { noContent } from '../../../../presentation/helpers/http/http-helper'
import { badRequest, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation'

export class AddCarController implements Controller {
  private readonly addCar: AddCar
  private readonly addOwner: AddOwner
  private readonly validation: Validation

  constructor (addCar: AddCar, addOwner: AddOwner, validation: Validation) {
    this.addCar = addCar
    this.addOwner = addOwner
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const {
        name,
        brand,
        manufactureYear,
        description,
        owner_name,
        email,
        telephone
      } = httpRequest.body

      const owner = await this.addOwner.add({
        owner_name,
        email,
        telephone
      })

      await this.addCar.add({
        name,
        brand,
        manufactureYear,
        description,
        owner
      })

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

import { MissingParamError } from '../../presentation/errors/missing-param-error'
import { Validation } from '../../presentation/protocols/validation'

export class RequiredFieldsValidation implements Validation {
  private readonly fiedlName: string

  constructor (fieldName: string) {
    this.fiedlName = fieldName
  }

  validate (input: any): Error {
    if (!input[this.fiedlName]) {
      return new MissingParamError(this.fiedlName)
    }
  }
}

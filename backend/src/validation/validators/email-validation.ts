import { InvalidParamError } from '../../presentation/errors/invalid-param-error'
import { Validation } from '../../presentation/protocols/validation'
import { EmailValidator } from '../../validation/protocols/email-validator'

export class EmailValidation implements Validation {
  private readonly emailValidator: EmailValidator
  private readonly email: string

  constructor (emailValidator: EmailValidator, email: string) {
    this.emailValidator = emailValidator
    this.email = email
  }

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.email])
    if (!isValid) {
      return new InvalidParamError(this.email)
    }
  }
}

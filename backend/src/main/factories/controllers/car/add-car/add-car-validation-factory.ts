import { EmailValidatorAdapter } from '../../../../../infra/validations/email-validator-adapter'
import { Validation } from '../../../../../presentation/protocols'
import { EmailValidation, RequiredFieldsValidation, ValidationComposite } from '../../../../../validation/validators'

export const makeAddCarValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name', 'brand', 'manufactureYear', 'description', 'owner_name', 'email', 'telephone']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  validations.push(new EmailValidation(new EmailValidatorAdapter(), 'email'))
  return new ValidationComposite(validations)
}

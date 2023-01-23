import { InvalidParamError } from '../../presentation/errors/invalid-param-error'
import { EmailValidator } from '../../validation/protocols/email-validator'
import { mockEmailValidator } from '../../validation/test'
import { EmailValidation } from './email-validation'

interface SutTypes {
  sut: EmailValidation
  emailValidatorStub: EmailValidator
}

const makeSut = (): SutTypes => {
  const emailValidatorStub = mockEmailValidator()
  const sut = new EmailValidation(emailValidatorStub, 'email')

  return {
    sut,
    emailValidatorStub
  }
}

describe('EmailValidation', () => {
  it('Should return an error if EmailValidator returns false', () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)
    const error = sut.validate({ email: 'any@mail.com' })
    expect(error).toEqual(new InvalidParamError('email'))
  })

  it('Should call EmailValidator with correct email', () => {
    const { sut, emailValidatorStub } = makeSut()
    const emailSpy = jest.spyOn(emailValidatorStub, 'isValid')
    sut.validate({ email: 'any@mail.com' })
    expect(emailSpy).toHaveBeenCalledWith('any@mail.com')
  })

  it('Should throws if EmailValidator throws', () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(sut.validate).toThrow()
  })
})

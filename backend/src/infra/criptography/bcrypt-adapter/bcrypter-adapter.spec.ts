import bcrypt from 'bcrypt'
import { throwError } from '../../../domain/test/test-helper'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return Promise.resolve('hash')
  },
  async compare (): Promise<boolean> {
    return Promise.resolve(true)
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('BcryptAdapter', () => {
  describe('hash()', () => {
    it('Should call hash with correct values', async () => {
      const sut = makeSut()
      const hashSpy = jest.spyOn(bcrypt, 'hash')
      await sut.hash('any_value')
      expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
    })

    it('Should return a valid hash on a hash success', async () => {
      const sut = makeSut()
      const hashed_value = await sut.hash('any_value')
      expect(hashed_value).toBe('hash')
    })

    it('Should throws if bcrypt throws', async () => {
      const sut = makeSut()
      jest.spyOn(bcrypt, 'hash').mockImplementationOnce(throwError)
      const promise = sut.hash('any_value')
      await expect(promise).rejects.toThrow()
    })
  })

  describe('compare()', () => {
    it('Should call compare with correct values', async () => {
      const sut = makeSut()
      const compareSpy = jest.spyOn(bcrypt, 'compare')
      await sut.compare('any_value', 'any_value')
      expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_value')
    })

    it('Should return true if compare succeeds', async () => {
      const sut = makeSut()
      const isValid = await sut.compare('any_value', 'any_value')
      expect(isValid).toBeTruthy()
    })

    it('Should return false if compare fails', async () => {
      const sut = makeSut()
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(async () => Promise.resolve(false))
      const isValid = await sut.compare('any_value', 'any_hashed')
      expect(isValid).toBeFalsy()
    })

    it('Should throws if compare throws', async () => {
      const sut = makeSut()
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(throwError)
      const promise = sut.compare('any_value', 'any_value')
      await expect(promise).rejects.toThrow()
    })
  })
})

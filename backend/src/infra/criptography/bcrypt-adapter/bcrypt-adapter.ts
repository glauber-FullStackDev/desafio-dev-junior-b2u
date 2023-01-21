import bcrypt from 'bcrypt'
import { HashComparer } from '../../../data/protocols/criptography/hash-comparer'
import { Hasher } from '../../../data/protocols/criptography/hasher'

export class BcryptAdapter implements Hasher, HashComparer {
  private readonly salt: number
  constructor (salt: number) {
    console.log('4', process.env.DB_PORT)
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hashed_value = await bcrypt.hash(value, this.salt)
    return hashed_value
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}

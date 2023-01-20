import { User } from '../../../Domain/Entities/User'

describe('User', () => {
  it('deve instanciar um objeto com as propriedades corretas', () => {
    const client = {
      name: 'John Doe',
      email: 'john@doe.com',
      password: 'johndoe123'
    }

    const user = new User(client)
    expect(user.name).toBe('John Doe')
    expect(user.email).toBe('john@doe.com')
    expect(user.password).toBe('johndoe123')
  })
})

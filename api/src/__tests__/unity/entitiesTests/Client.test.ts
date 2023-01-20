import { Client, IClient } from '../../../Domain/Entities/Car'

describe('Client', () => {
  const validClient: IClient = {
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main Street',
    phoneNumber: '+555123456789',
    cpf: '12345678910'
  }

  it('deve instanciar um objeto com as propriedades corretas', () => {
    const client = new Client(validClient)
    expect(client.name).toBe(validClient.name)
    expect(client.email).toBe(validClient.email)
    expect(client.address).toBe(validClient.address)
    expect(client.phoneNumber).toBe(validClient.phoneNumber)
    expect(client.cpf).toBe(validClient.cpf)
  })
})

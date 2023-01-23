import { randomUUID } from 'crypto';

export class User {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly phoneNumber: string,
    readonly createdAt: Date,
  ) {}

  static new(
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
  ) {
    const id = randomUUID();
    const createdAt = new Date();

    return new User(id, name, email, password, phoneNumber, createdAt);
  }

  static from(
    id: string,
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    createdAt: Date,
  ) {
    return new User(id, name, email, password, phoneNumber, createdAt);
  }
}

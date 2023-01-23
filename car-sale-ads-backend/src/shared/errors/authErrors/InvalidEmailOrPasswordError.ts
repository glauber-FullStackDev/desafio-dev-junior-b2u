export class InvalidEmailOrPasswordError extends Error {
  constructor() {
    super('invalid email or password');
  }
}

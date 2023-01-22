export class AlreadyExistsEntityError extends Error {
  constructor(message = 'entity already exists') {
    super(message);
  }
}

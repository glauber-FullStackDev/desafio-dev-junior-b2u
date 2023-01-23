export class DoesNotExistsEntityError extends Error {
  constructor(message = 'entity does not exists') {
    super(message);
  }
}

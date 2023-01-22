export class EntityPersistenceError extends Error {
  constructor(message = 'error while the persisting entity') {
    super(message);
  }
}

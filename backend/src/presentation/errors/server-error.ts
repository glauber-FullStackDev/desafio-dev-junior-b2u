export class ServerError extends Error {
  constructor (stack?: any) {
    super('Internal Server Error')
    this.name = 'ServerError'
    this.stack = stack
  }
}

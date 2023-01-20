class CustomError extends Error {
  cause: number
  constructor (msg: string, cause: number) {
    super(msg)
    this.cause = cause
  }
}

export default CustomError

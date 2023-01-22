import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const { message, cause } = err
  console.log(err)
  if (!cause) {
    return res.status(500).json({ message })
  }
  return res.status(cause).json({ message })
}

export default errorHandler

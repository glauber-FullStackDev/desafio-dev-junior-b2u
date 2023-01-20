import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import CustomError from '../helpers/customError'
const secret = process.env.JWT_SECRET

interface jwtPayload {
  data: {
    email: string
    password: string
  }
  iat: number
}

export const authToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  let token = ''

  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1]
  }

  console.log(token)
  try {
    const { data } = verify(token, secret as string) as jwtPayload
    console.log(data, token)
    req.body.userDate = data
    next()
  } catch (error) {
    if (error) {
      throw new CustomError('Token invalido', 401)
    }
  }
}

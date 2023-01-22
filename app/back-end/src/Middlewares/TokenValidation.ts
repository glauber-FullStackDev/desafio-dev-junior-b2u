import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';
import IUser from '../Interfaces/IUser';

const secret = process.env.JWT_SECRET || 'secretJWT';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const data = jwt.verify(authorization, secret);
    const { id, username, email, phoneNumber } = data as JwtPayload;

    res.locals.id = id;
    res.locals.username = username;
    res.locals.email = email;
    res.locals.phoneNumber = phoneNumber;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  };
};

export default tokenValidation;

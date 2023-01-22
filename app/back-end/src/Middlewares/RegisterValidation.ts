import { Request, Response, NextFunction } from 'express';
import UserODM from '../Models/UserODM';
import { registerSchema } from './Schemas';

export const fieldValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validation = registerSchema.validate(req.body);
  if (validation.error) return res.status(400).json({ message: 'Check the fields and try again!' });
  return next();
};

export const registerValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const userModel = new UserODM;
  const findUser = await userModel.findByEmail(email);
  if (findUser) return res.status(406).json({ message: 'User already registered!' });
  return next();
};

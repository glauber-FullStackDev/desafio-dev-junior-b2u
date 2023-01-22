import { Request, Response, NextFunction } from 'express';
import UserODM from '../Models/UserODM';
import { loginSchema } from './Schemas';

export const loginFieldsValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validation = loginSchema.validate(req.body);
  if (validation.error) return res.status(400).json({ message: 'Check the fields and try again!' });
  return next();
};

export const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
  const userModel = new UserODM();
  const user = await userModel.findByEmailPassword(req.body);
  if (!user) return res.status(400).json({ message: 'Email / password is incorrect!' });
  return next();
};

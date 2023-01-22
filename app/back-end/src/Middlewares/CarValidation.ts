import { Request, Response, NextFunction } from 'express';
import CarODM from '../Models/CarODM';
import { carSchema } from './Schemas';

export const carFieldsValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validation = carSchema.validate(req.body);
  if (validation.error) return res.status(400).json({ Message: 'An error occurred, check the fields...' });
  return next();
};

export const validationCar = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const carModel = new CarODM;
  const carById = await carModel.getCarById(id);
  if (!carById) return res.status(404).json({ message: 'Car not found!' });
  return next();
};

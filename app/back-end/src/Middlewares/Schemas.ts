import joi from 'joi';

export const registerSchema = joi.object({
  username: joi.string().min(2).required(),
  email: joi.string().email().required(),
  phoneNumber: joi.number().min(11).required(),
  password: joi.string().min(8).required(),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

export const carSchema = joi.object({
  name: joi.string().min(1).required(),
  brand: joi.string().min(1).required(),
  model: joi.string().min(1).required(),
  year: joi.number().min(4).required(),
  color: joi.string().required(),
  image: joi.string().required(),
  price: joi.number().required(),
  description: joi.string().required(),
});

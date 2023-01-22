import jwt from 'jsonwebtoken';
import 'dotenv/config';
import IUser from './Interfaces/IUser';

const generateToken = (payload: IUser) => {
  const secret = process.env.JWT_SECRET || 'secretJWT';
  const token = jwt.sign(payload, secret);
  return token;
};

export default generateToken;
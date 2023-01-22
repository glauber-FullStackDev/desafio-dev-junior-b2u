import { Router } from 'express';
import UserController from '../Controllers/UserController';
import { fieldValidation, registerValidation } from '../Middlewares/RegisterValidation';
import { loginValidation, loginFieldsValidation } from '../Middlewares/LoginValidation';

const UserRouter = Router();

UserRouter.post('/register', fieldValidation, registerValidation, (req, res) => new UserController(req, res).register());

UserRouter.post('/login', loginFieldsValidation, loginValidation, (req, res) => new UserController(req, res).login());

export default UserRouter;

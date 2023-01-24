import express, { Router, Request, Response, NextFunction } from "express";
import { UsersController } from "../controllers/users.controller";
import { UsersRepository } from "../repositories/users.repository";
import prismaClient from "../services/prisma.service";
import hashPasswordMiddleware from "../middlewares/hash-password.middleware";
import { AuthService } from "../services/auth.service";
import { CryptoService } from "../services/crypto.service";
import {verifyToken} from "../middlewares/jwt-token.middleware";
const userRouter: Router = express.Router();
const cryptoService: CryptoService = new CryptoService();
const userRepository: UsersRepository = new UsersRepository(prismaClient);
const authService: AuthService = new AuthService(userRepository, cryptoService);
const usersController: UsersController = new UsersController(
  userRepository,
  authService
);

userRouter.post("/login", usersController.login);
userRouter.post(
  "/logout",
  usersController.logout
);
userRouter.post(
  "/signup",
  hashPasswordMiddleware.hashPassword,
  usersController.signup
);

userRouter.get(
  "/users/:id([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})",
  usersController.findOne
);
userRouter.get(
  "/users/:email",
  usersController.findOneByEmail
);
userRouter.delete("/users", verifyToken, usersController.remove);

export default userRouter;

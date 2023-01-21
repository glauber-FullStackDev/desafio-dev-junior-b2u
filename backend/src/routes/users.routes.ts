import express, { Router, Request, Response, NextFunction } from "express";
import { UsersController } from "../controllers/users.controller";
import { UsersRepository } from "../repositories/users.repository";
import prismaClient from "../services/prisma.service";
import hashPasswordMiddleware from "../middlewares/hash-password.middleware";
import { AuthService } from "../services/auth.service";
import { CryptoService } from "../services/crypto.service";

const userRouter: Router = express.Router();
const cryptoService: CryptoService = new CryptoService();
const userRepository: UsersRepository = new UsersRepository(prismaClient);
const authService: AuthService = new AuthService(userRepository, cryptoService);
const usersController: UsersController = new UsersController(userRepository, authService);

/**
 * @openapi
 * /login:
 *   post:
 *     description: Login endpoint.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Some thing.
 * 
 */
userRouter.post("/login", usersController.login);
userRouter.post("/logout", usersController.logout);
userRouter.post("/signup", hashPasswordMiddleware.hashPassword, usersController.signup);

userRouter.get("/users/:id([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})", usersController.findOne);
//FIXME: email regex doesnt work
// userRouter.get("/users/:email([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,8})", usersController.findOneByEmail);
userRouter.get("/users/:email", usersController.findOneByEmail);
userRouter.get("/users", usersController.findAll);
userRouter.delete("/users", usersController.remove);

userRouter.use((req: Request, res: Response, next: NextFunction) => res.status(404).json({status: "Error", message: "Page not found"}))

export default userRouter;
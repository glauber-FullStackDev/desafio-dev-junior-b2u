import express, { Router, Request, Response } from "express";
import { UsersController } from "../controllers/users.controller";
import { UsersService } from "../services/users.service";
import prismaClient from "../database/client";

const userRouter: Router = express.Router();
const userService: UsersService = new UsersService(prismaClient);
const usersController: UsersController = new UsersController(userService);

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
userRouter.post("/signup", usersController.signup);

export default userRouter;
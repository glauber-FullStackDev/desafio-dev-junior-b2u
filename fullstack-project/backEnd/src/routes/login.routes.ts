import { Router } from "express";
import loginController from "../controllers/login";

export const loginRoutes = Router();

loginRoutes.post("/", loginController);

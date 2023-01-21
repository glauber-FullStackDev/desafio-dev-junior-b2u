import { Router } from "express";
import allUsersController from "../controllers/users/all-users-controller";

const routeUsers = Router();

routeUsers.get("/users", allUsersController)

export { routeUsers };

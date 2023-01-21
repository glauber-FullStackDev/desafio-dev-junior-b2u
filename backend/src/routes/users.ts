import { Router } from "express";
import allUsersController from "../controllers/users/allUsers";

const routeUsers = Router();

routeUsers.get("/users", allUsersController)

export { routeUsers };

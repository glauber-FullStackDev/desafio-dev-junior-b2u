import { Router } from "express";
import allUsersController from "../controllers/users/all-users-controller";
import createUserController from "../controllers/users/create-user-controller";
import updateUserController from "../controllers/users/update-user-controller";

const routeUsers = Router();

routeUsers
  .get("/users", allUsersController)
  .post("/users", createUserController)
  .put("/users/:id", updateUserController);

export { routeUsers };

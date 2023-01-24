import Router from "express";
import createUserController from "../controllers/users/createUserController";
import deleteUserController from "../controllers/users/deleteUserController";
import listProfileController from "../controllers/users/listProfileController";
import listUsersController from "../controllers/users/listUsersController";
import updateUserController from "../controllers/users/updateUserController";
import verifyAuthToken from "../middlewares/verifyAuthToken";

export const userRoutes = Router();

userRoutes.post("/", createUserController);
userRoutes.get("/", listUsersController);
userRoutes.get("/:user_id", verifyAuthToken, listProfileController);
userRoutes.patch("/:user_id", verifyAuthToken, updateUserController);
userRoutes.delete("/:user_id", verifyAuthToken, deleteUserController);

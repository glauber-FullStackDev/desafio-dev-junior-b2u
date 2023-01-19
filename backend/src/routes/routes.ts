import { Router } from "express";

//user controllers
import { createUserController } from "../controllers/user/createUser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { readAllUserController } from "../controllers/user/readAllUser.controller";
import { readOneUserController } from "../controllers/user/readOneUser.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

//user middlewares
import { uniqueEmailPhoneMiddleware } from "../middlewares/user/uniqueEmailPhone.middleware";
import { bodyRequestMiddleware } from "../middlewares/user/bodyRequest.middleware";
import { userNotFoundMiddleware } from "../middlewares/user/userNotFound.middleware";


const router = Router()

// user routes
router.post('/users',bodyRequestMiddleware,uniqueEmailPhoneMiddleware,createUserController);
router.get('/users',readAllUserController);
router.get('/users/:id',userNotFoundMiddleware,readOneUserController);
router.delete('/users/:id',userNotFoundMiddleware,deleteUserController);
router.patch('/users/:id',userNotFoundMiddleware,uniqueEmailPhoneMiddleware,updateUserController);





export default router




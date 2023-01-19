import { Router } from "express";

import { createUserController } from "../controllers/user/createUser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { readAllUserController } from "../controllers/user/readAllUser.controller";
import { readOneUserController } from "../controllers/user/readOneUser.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

const router = Router()

// user routes
router.post('/users',createUserController);
router.get('/users',readAllUserController);
router.get('/users/:id',readOneUserController);
router.delete('/users/:id',deleteUserController);
router.patch('/users/:id',updateUserController);





export default router




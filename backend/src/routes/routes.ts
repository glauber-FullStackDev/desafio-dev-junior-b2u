import { Router } from "express";

import { createUserController } from "../controllers/user/createUser.controller";
import { readAllUserController } from "../controllers/user/ReadAllUser.controller";

const router = Router()

// user routes
router.post('/users',createUserController);
router.get('/users',readAllUserController);


export default router




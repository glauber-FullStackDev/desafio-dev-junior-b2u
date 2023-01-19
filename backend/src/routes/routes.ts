import { Router } from "express";

import { createUserController } from "../controllers/user/createUser.controller";

const router = Router()


router.post('/users',createUserController);

export default router




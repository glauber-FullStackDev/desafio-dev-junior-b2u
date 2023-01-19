import { Router } from "express";
import authRouter from "./authentication-route.js";
import adRouter from "./ads-route.js";

const router = Router();

router.use(authRouter);
router.use(adRouter);

export default router;
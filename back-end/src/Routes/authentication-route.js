import { Router } from "express";
import {
  SignUp,
  SignIn,
  Logout,
} from "../Controllers/authentication-controllers.js";
import { schemaValidationMiddleware } from "../Middlewares/schema-validation-middleware.js";
import {
  signUpSchema,
  signInSchema,
} from "../Schemas/authentication-schema.js";

const authRouter = Router();

authRouter.post("/signUp", schemaValidationMiddleware(signUpSchema), SignUp);
authRouter.post("/signIn", schemaValidationMiddleware(signInSchema), SignIn);
authRouter.post("/logOut", Logout);

export default authRouter;

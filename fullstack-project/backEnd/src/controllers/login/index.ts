import { Request, Response } from "express";
import loginService from "../../services/login";

const loginController = async (request: Request, response: Response) => {

  const { email, password } = request.body;

  const token = await loginService({ email, password });

  return response.status(200).json({ token });
};

export default loginController;

import { NextFunction, Request, Response } from "express";
import { CustomError } from "../helpers/apiErrors";

 const errorMiddleware = (
  error: Error & Partial<CustomError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500
  const message = error.message ? error.message : "Internal Error"
  return  res.status(statusCode).send({message: message})
};

export default errorMiddleware
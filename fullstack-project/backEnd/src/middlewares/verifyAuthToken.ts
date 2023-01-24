import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyAuthToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }

  const splitToken = token.split(" ");
  jwt.verify(
    splitToken[1],
    process.env.JWT_SECRET as string,
    (error: any, decoded: any) => {
      if (error) {
        return response.status(401).json({
          message: "Invalid token",
        });
      }
      request.user = {
        id: decoded.user.id,
        email: decoded.user.email,
        name: decoded.user.name,
        phone: decoded.user.phone,
      };
      next();
    }
  );
};

export default verifyAuthToken;

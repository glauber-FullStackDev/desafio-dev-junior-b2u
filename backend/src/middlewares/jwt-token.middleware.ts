import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../tools/secret";
import { DataResponse, Status } from "../core/entities/responses.entity";


export function verifyToken(req: Request, res: Response, next: NextFunction){

    try {
      if(req.headers.authorization){
        const result = verify(req.headers.authorization.split(" ")[1], secret);
        return next();
      }else{
        const response: DataResponse<string> = {
          status: Status.Error,
          message: "No provided token"
        }
        return res.json(response)
      }
    } catch (error) {
      console.log(error);
      const response: DataResponse<string> = {
        status: Status.Error,
        message: "Invalid Token"
      }
      return res.json(response)
      
    }
  }



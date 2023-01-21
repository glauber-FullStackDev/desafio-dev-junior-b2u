import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

class JwtTokenMiddleware {
  static verifyToken(req: Request, res: Response, next: NextFunction){
    if(req.headers.authorization){
      console.log(verify(req.headers.authorization, "secret"));
    }else{
      console.log("Not authorized");
      
    }
    next()
  }
}

class JwtToken {
  constructor() {

  }

  static getToken(){

  }

  static getRole(){

  }
}

export {JwtTokenMiddleware}
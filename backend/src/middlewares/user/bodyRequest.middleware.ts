import { NextFunction, Request, Response } from "express";

export const bodyRequestMiddleware = async(req:Request,res:Response,next:NextFunction) => {

    const {name,email,tel} = req.body

    if(!name || !email || !tel) return res.status(400).json({
        name:name || "Nome é obrigatório",
        email: email || "Email é obrigatório",
        tel: tel || "Telefone é obrigatório"
    });

    

    next();
}
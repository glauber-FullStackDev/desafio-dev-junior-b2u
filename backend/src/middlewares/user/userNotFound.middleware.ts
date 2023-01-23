import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";


export const userNotFoundMiddleware = async(req:Request,res:Response,next:NextFunction) => {

    const id = req.params.id
    const userExists = await prisma.user.findFirst({
        where:{
            id
        }
    });

    if(!userExists){
        return res.status(404).json({
            "message":"Usuário não encontrado"
        })
    };

    next();
}
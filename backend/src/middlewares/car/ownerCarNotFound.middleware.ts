import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";


export const ownerCarNotFoundMiddleware = async(req:Request,res:Response,next:NextFunction) => {

    const {donoId} = req.body

    const ownerExist = await prisma.user.findFirst({
        where:{
            id:donoId
        }
    })
    if(!ownerExist) return res.status(404).json({
        message:"Este usuário não existe e não pode ter um carro adicionado"
    });
    

    next();
}
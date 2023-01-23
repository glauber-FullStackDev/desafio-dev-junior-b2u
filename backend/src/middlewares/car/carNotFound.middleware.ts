import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";


export const carNotFoundMiddleware = async(req:Request,res:Response,next:NextFunction) => {
    const id = req.params.id

    const carExist = await prisma.car.findFirst({
        where:{
            id
        }
    })
    if(!carExist) return res.status(404).json({
        message:"Carro não encontrado"
    });
    

    next();
}
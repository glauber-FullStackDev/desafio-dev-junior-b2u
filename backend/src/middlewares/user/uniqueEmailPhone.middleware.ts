import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";


export const uniqueEmailPhoneMiddleware = async(req:Request,res:Response,next:NextFunction) => {

    const {email,tel} = req.body
    const emailExist = await prisma.user.findFirst({
        where:{
            email:email
        }
    });
    const telExist = await prisma.user.findFirst({
        where:{
            tel:tel
        }
    });

    if(emailExist){
        return res.status(400).json({
            message:"Email já existente"
        });
    };
    if(telExist){
        return res.status(400).json({
            message:'Telefone já existente'
        })
    }
    next();
}
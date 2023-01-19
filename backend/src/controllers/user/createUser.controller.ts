import { Request, Response } from "express";
import { IUser } from "../../interfaces/IUser";
import { createUserService } from "../../services/user/createUser.service";




export const createUserController = async (req:Request,res:Response) => {

    const {name,email,tel}:IUser = req.body
    try{
        const user:IUser = await createUserService({name,email,tel});
        return res.status(201).json(user);
    } catch(err){
        if(err instanceof Error){
            return res.status(400).json({
                'message':err.message,
                
            })
        }

    }
};








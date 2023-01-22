import { Request, Response } from "express";
import { IUser } from "../../interfaces/IUser";
import { createUserService } from "../../services/user/createUser.service";




export const createUserController = async (req:Request,res:Response):Promise<any> => {
    res.header("Access-Control-Allow-Origin", "*");
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








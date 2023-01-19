import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";




export const createUserController = async (req:Request,res:Response) => {

    const {name,email,tel} = req.body
    try{
        const user = await createUserService({name,email,tel});
        return res.json(user);
    } catch(err){
        if(err instanceof Error){
            return res.status(400).json({
                'status':err.name,
                'message':err.message,
                
            })
        }

    }
};








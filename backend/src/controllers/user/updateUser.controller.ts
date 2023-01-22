import { Request, Response } from "express";
import { IUser} from "../../interfaces/IUser";
import { updateUserService } from "../../services/user/updateUser.service";


export const updateUserController = async (req:Request,res:Response):Promise<any> => {
    const {name,email,tel}:IUser = req.body;
    res.header("Access-Control-Allow-Origin", "*");
    const id:string = req.params.id

    try {
        const userUpdated:IUser = await updateUserService({name,email,tel,id});
        return res.status(200).json(userUpdated);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
        
    }


}
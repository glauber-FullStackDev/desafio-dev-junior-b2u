import { Request, Response, NextFunction } from "express"
import { decode } from "jsonwebtoken";
import { CreateVehicleDto } from "../core/dtos/create-vehicle.dto";

export async function handleCreateVehicle(req: Request<CreateVehicleDto>, res: Response, next: NextFunction) {


    const token = req.headers.authorization?.replace("Bearer ", "");
    const json = <string>decode(token!);
    const user = JSON.parse(JSON.stringify(json));

    req.body.userId = user.id;

    next();

}
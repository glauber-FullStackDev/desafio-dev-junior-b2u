import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../core/dtos/create-user.dto";
import { UpdateUserDto } from "../core/dtos/update-user.dto";
import { Request, Response } from "express";

export class UsersController {
  constructor(private readonly userService: UsersService) {}

  login(req: Request<CreateUserDto>, res: Response) {
    return this.userService.create(req.body);
  }

  logout(req: Request<CreateUserDto>, res: Response) {
    return this.userService.create(req.body);
  }

  signup(req: Request<CreateUserDto>, res: Response) {
    return this.userService.create(req.body);
  }

  create(req: Request<CreateUserDto>, res: Response) {
    return this.userService.create(req.body);
  }

  findAll(req: Request<CreateUserDto>, res: Response) {
    return this.userService.findAll();
  }

  findOne(req: Request<CreateUserDto>, res: Response) {
    return this.userService.findOne(req.body.id!);
  }

  findOneByEmail(req: Request<CreateUserDto>, res: Response) {
    return this.userService.findOneByEmail(req.body.email);
  }

  update(req: Request<UpdateUserDto>, res: Response) {
    return this.userService.update(req.body.id!, req.body);
  }

  remove(req: Request<CreateUserDto>, res: Response) {
    return this.userService.remove(req.body.id!);
  }
}

import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../core/dtos/create-user.dto";
import { UpdateUserDto } from "../core/dtos/update-user.dto";
import { Request, Response } from "express";

export class UsersController {
  constructor(private readonly userService: UsersService) {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this);
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findOneByEmail = this.findOneByEmail.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async login(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userService.create(req.body));
  }

  async logout(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userService.create(req.body));
  }

  async signup(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userService.create(req.body));
  }

  async create(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userService.create(req.body));
  }

  async findAll(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userService.findAll());
  }

  async findOne(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userService.findOne(req.body.id!));
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

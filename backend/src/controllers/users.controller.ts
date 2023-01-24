import { UsersRepository } from "../repositories/users.repository";
import { CreateUserDto } from "../core/dtos/create-user.dto";
import { UpdateUserDto } from "../core/dtos/update-user.dto";
import { Request, Response } from "express";
import { ReadUserDto } from "../core/dtos/read-user.dto";
import { DataResponse, Status } from "../core/entities/responses.entity";
import { User } from "../core/entities/user.entity";
import { AuthService } from "../services/auth.service"


export class UsersController {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly authService: AuthService
  ) {
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

  async login(req: Request<Partial<CreateUserDto>>, res: Response) {
    
    if(req.body.email && req.body.password){
      const result: DataResponse<User> | undefined = await this.authService.login(req.body.email, req.body.password);
      if(result){
        return res.json(result);
      }
    }
    
    return res.json({error: "error"});

  }

  async logout(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userRepository.create(req.body));
  }

  async signup(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userRepository.create(req.body));
  }

  async create(req: Request<CreateUserDto>, res: Response) {
    return res.json(await this.userRepository.create(req.body));
  }

  async findAll(req: Request<ReadUserDto>, res: Response) {
    return res.json(await this.userRepository.findAll());
  }

  async findOne(req: Request<ReadUserDto>, res: Response) {
    if (req.params.id)
      return res.json(
        await this.userRepository.findOne(req.params.id)
      );
  }

  async findOneByEmail(req: Request<ReadUserDto>, res: Response) {
    if (req.params.email) {
      return res.json(
        await this.userRepository.findOneByEmail(req.params.email)
      );
    }
  }

  async update(req: Request<UpdateUserDto>, res: Response) {
    return res.json(this.userRepository.update(req.body));
  }

  async remove(req: Request<ReadUserDto>, res: Response) {
    return res.json(this.userRepository.remove(req.body));
  }
}

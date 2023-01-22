import { Request, Response } from 'express';
import UserODM from '../Models/UserODM';
import UserService from '../Services/UserService';

class UserController {
  private req: Request;
  private res: Response;
  private service: UserService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new UserService(new UserODM());
  }

  public async register() {
    const newUser = await this.service.register(this.req.body);
    return this.res.status(201).json(newUser);
  }

  public async login() {
    const token = await this.service.login(this.req.body);
    return this.res.status(201).json({ token });
  }
}

export default UserController;

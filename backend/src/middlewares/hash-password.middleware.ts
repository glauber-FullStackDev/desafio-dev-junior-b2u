import { Request, Response, NextFunction } from "express";
import { CryptoService } from "../services/crypto.service";
import { CreateUserDto } from "../core/dtos/create-user.dto";

class HashPasswordMiddleware {
  constructor(private readonly cryptoService: CryptoService) {
    this.hashPassword = this.hashPassword.bind(this)
  }

  async hashPassword(req: Request<CreateUserDto>, res: Response, next: NextFunction) {
    req.body.password = await this.cryptoService.hash(req.body.password);
    return next()
  }
}

const hashPasswordMiddleware = new HashPasswordMiddleware(new CryptoService());
export default hashPasswordMiddleware;

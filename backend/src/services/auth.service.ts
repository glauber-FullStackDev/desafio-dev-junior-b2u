import { CryptoService } from './crypto.service';
import { UsersRepository } from '../repositories/users.repository';
import { CreateUserDto } from '../core/dtos/create-user.dto';
import { ReadUserDto } from '../core/dtos/read-user.dto';
import { DataResponse, Status } from '../core/entities/responses.entity';
import { User } from '../core/entities/user.entity';
import { UpdateUserDto } from '../core/dtos/update-user.dto';

export class AuthService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly cryptoService: CryptoService,
  ) {
    this.login = this.login.bind(this);
  }

  async login(email: string, password: string): Promise<DataResponse<any>> {
    const user: DataResponse<User> = await this.userRepository.findOneByEmail(email);
    if (user) {
      const valid = await this.cryptoService.verify(password, user.data!.password);
      if (valid) {
        const response: DataResponse<User> = {
          status: Status.Ok,
          message: "User logged in",
          token: "1111111111",
          data: user.data!
        }
        return response;
      }
    }
    const error: DataResponse<string> = {
      message: "Invalid email or password",
      status: Status.Error
    }

    return error;
  }
}

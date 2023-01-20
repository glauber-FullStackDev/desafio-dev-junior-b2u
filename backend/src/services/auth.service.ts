import { CryptoService } from './crypto.service';
import { UsersService } from './users.service';

export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly cryptoService: CryptoService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user) {
      const valid = await this.cryptoService.verify(password, user.password!);
      if (valid) {
        return true;
      }
    }
    return null;
  }
}

import User from '../Domains/User';
import generateToken from '../generateToken';
import ILogin from '../Interfaces/ILogin';
import IUser from '../Interfaces/IUser';
import { IUserODM } from '../Models/UserODM';

class UserService {
  constructor(
    private userODM: IUserODM,
  ) {}

  private createUserDomain(user: IUser | null): User | null {
    if (user) return new User(user);
    return null;
  }

  public async register(user: IUser) {
    const newUser = await this.userODM.register(user);
    return this.createUserDomain(newUser);
  }

  public async login(login: ILogin) {
    const user = await this.userODM.findByEmailPassword(login);
    if (user) {
      const obj = {
        id: user?.id,
        username: user?.username,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        password: user?.password,
      };
      const token = generateToken(obj);
      return token;
    };
  }
}

export default UserService;

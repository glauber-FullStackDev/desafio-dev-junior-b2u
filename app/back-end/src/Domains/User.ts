import IUser from '../Interfaces/IUser';

class User {
  protected id: string | undefined;
  protected username: string;
  protected email: string;
  protected phoneNumber: number;
  protected password: string;

  constructor(params: IUser) {
    this.id = params.id;
    this.username = params.username;
    this.email = params.email;
    this.phoneNumber = params.phoneNumber;
    this.password = params.password;
  }
}

export default User;

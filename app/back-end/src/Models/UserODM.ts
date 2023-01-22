import { Schema, Model, model, models } from 'mongoose';
import ILogin from '../Interfaces/ILogin';
import IUser from '../Interfaces/IUser';

export interface IUserODM {
  findByEmailPassword(login: ILogin): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  register(user: IUser): Promise<IUser>
}

class UserODM {
  private schema: Schema;
  private model: Model<IUser>;

  constructor() {
    this.schema = new Schema<IUser>({
      username: { type: String, required: true },
      email: { type: String, required: true },
      phoneNumber: { type: Number, required: true },
      password: { type: String, required: true },
    });
    this.model = models.User || model('User', this.schema);
  }

  public async findByEmailPassword(login: ILogin): Promise<IUser | null> {
    const { email, password } = login;
    const user = await this.model.findOne({ email, password });
    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ email });
    return user;
  }

  public async register(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }

  public async createUsers(users: any) {
    return this.model.insertMany(users);
  }

  public async deleteAll() {
    await this.model.deleteMany({});
  }
}

export default UserODM;

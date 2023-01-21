import { BaseEntity, BaseInterface } from "./base.entity";

// interface UserInterface {
interface User extends BaseInterface{
  email: string;
  password: string;
  fullname: string;
  phone: string;
}

// class User extends BaseEntity implements Partial<UserInterface> {
//   email: string | undefined;
//   password: string | undefined;
//   name: string | undefined;
//   phone: string | undefined;
// }

// export { User, UserInterface };
export { User };

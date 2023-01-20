import { BaseEntity } from "./base.entity";

interface UserInterface {
  email: string;
  password: string;
}

class User extends BaseEntity implements Partial<UserInterface> {
  email: string | undefined;
  password: string | undefined;
}

export { User, UserInterface };

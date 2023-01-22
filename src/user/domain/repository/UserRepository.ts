import { User } from '../User';

export interface UserRepository {
  existsByEmail(email: string): Promise<boolean>;
  save(user: User): Promise<User>;
}

export const UserRepository = Symbol('UserRepository');

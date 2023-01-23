import { User } from '../User';

export interface UserRepository {
  existsByEmail(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
}

export const UserRepository = Symbol('UserRepository');

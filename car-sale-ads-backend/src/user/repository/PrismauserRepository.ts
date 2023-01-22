import { PrismaClient } from 'src/database/prisma.service';
import { EntityPersistenceError } from 'src/shared/errors/databaseerros/PersisteEntityError';
import { User } from '../domain/User';
import { UserRepository } from '../domain/repository/UserRepository';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly pirsmaClient: PrismaClient) {}

  async existsByEmail(email: string): Promise<boolean> {
    const usersCount = await this.pirsmaClient.user.count({ where: { email } });
    return usersCount > 0;
  }

  async save(user: User): Promise<User> {
    try {
      await this.userToModel(user);
    } catch (e) {
      throw new EntityPersistenceError('error whle prsiste user data');
    }
    return user;
  }

  private userToModel(user: User) {
    return this.pirsmaClient.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phoneNumber,
        createdAt: user.createdAt,
      },
    });
  }
}

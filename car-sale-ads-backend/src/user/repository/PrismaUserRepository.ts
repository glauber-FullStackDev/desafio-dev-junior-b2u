import { User as PrismauserModel } from 'prisma/prisma-client';
import { PrismaService } from 'src/database/prisma.service';
import { EntityPersistenceError } from 'src/shared/errors/databaseErrors/EntityPersistenceError';
import { DoesNotExistsEntityError } from 'src/shared/errors/domainErrors/DoesNotExistsEntityError';
import { User } from '../domain/User';
import { UserRepository } from '../domain/repository/UserRepository';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async existsByEmail(email: string): Promise<boolean> {
    const usersCount = await this.prismaClient.user.count({ where: { email } });
    return usersCount > 0;
  }

  async findByEmail(email: string): Promise<User> {
    const userModel = await this.prismaClient.user.findUnique({
      where: { email },
    });

    if (!userModel) {
      throw new DoesNotExistsEntityError('user does not exists');
    }

    return this.modelToUser(userModel);
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
    return this.prismaClient.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phoneNumber,
        createdAt: user.createdAt,
      },
    });
  }

  private modelToUser(model: PrismauserModel) {
    return User.from(
      model.id,
      model.name,
      model.email,
      model.password,
      model.phone,
      model.createdAt,
    );
  }
}

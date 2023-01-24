import { Inject, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { InvalidEmailOrPasswordError } from 'src/shared/errors/authErrors/InvalidEmailOrPasswordError';
import { UserRepository } from 'src/user/domain/repository/UserRepository';
import { ValidatedUserDto } from './dtos/ValidatedUserDto';

@Injectable()
export class ValidateUserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async execute(email: string, password: string): Promise<ValidatedUserDto> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidEmailOrPasswordError();
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new InvalidEmailOrPasswordError();
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}

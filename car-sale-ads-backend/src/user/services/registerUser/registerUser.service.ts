import { Inject, Injectable } from '@nestjs/common';
import { AlreadyExistsEntityError } from 'src/shared/errors/domainErrors/AlredyExistsEntityError';
import { User } from 'src/user/domain/User';
import { UserRepository } from 'src/user/domain/repository/UserRepository';

@Injectable()
export class RegisterUserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async execute(input: RegisterUserInput): Promise<UserData> {
    const existUser = await this.userRepository.existsByEmail(input.email);

    if (existUser) {
      throw new AlreadyExistsEntityError('user aleready exists');
    }

    const user = User.new(input.name, input.email, input.phoneNumber);
    await this.userRepository.save(user);
    return user;
  }
}

type RegisterUserInput = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type UserData = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
};

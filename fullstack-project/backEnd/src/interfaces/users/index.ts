export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IUserRequestUpdate {
  name?: string;
  password?: string;
  email?: string;
  phone?: string;
  updatedAt?: Date;
}

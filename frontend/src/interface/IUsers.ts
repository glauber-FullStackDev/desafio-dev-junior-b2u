import { Types } from "mongoose";

export interface IUser {
  value: { id: Types.ObjectId };
  name: string;
}

import User from "./user";

interface Car {
  id?: string;
  name?: string;
  brand?: string;
  price?: number;
  year?: number;
  description?: string;
  owner?: string;
  phone?: string;
  email?: string;
  cardId?: string;
  User?: User;
}
export default Car;
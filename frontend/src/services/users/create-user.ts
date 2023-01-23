import { IUsers } from "../../interface/IUsers";
import api from "../api";

const createUserService = async (users: IUsers) => {
  console.log(users);
  return await api
    .post("/users", users)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default createUserService;

import IUsers from "../../interface/IUsers";
import api from "../api";

const updateUserService = async (id: string, users: IUsers) => {
  return await api
    .put(`/users/${id}`, users)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default updateUserService;

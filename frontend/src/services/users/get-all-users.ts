import api from "../api";

const getAllUsers = async () => {
  return await api
    .get("/users")
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default getAllUsers;

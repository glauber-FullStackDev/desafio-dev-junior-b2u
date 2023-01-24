import api from "../api";

const deleteUserService = async (id: string) => {
  return await api
    .delete(`/users/${id}`)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default deleteUserService;
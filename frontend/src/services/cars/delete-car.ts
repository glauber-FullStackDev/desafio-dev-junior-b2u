import api from "../api";

export const deleteCarService = async (id: string) => {
  return await api
    .delete(`/cars/${id}`)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default deleteCarService;

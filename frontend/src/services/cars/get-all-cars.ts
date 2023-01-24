import api from "../api";

const getAllCars = async () => {
  return await api
    .get("/cars")
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default getAllCars;

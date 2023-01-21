import apiCars from "./api";

const getAllCars = async () => {
  return await apiCars
    .get("/cars")
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default getAllCars;

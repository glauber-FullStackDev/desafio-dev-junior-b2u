import apiCars from "./api";

const getAllUsers = async () => {
  return await apiCars
    .get("/users")
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default getAllUsers;

import api from "../api";

const getAllBrands = async () => {
  return await api
    .get("/brands")
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default getAllBrands;

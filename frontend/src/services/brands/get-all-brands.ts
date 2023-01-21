import apiBrands from "./api";


const getAllCars = async () => {
  return await apiBrands
    .get("/brands")
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default getAllCars;

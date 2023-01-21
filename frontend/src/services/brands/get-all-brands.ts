import apiBrands from "./api";

const getAllBrands = async () => {
  return await apiBrands
    .get("/brands")
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default getAllBrands;

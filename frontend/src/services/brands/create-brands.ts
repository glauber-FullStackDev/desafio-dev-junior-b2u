import { IBrands } from "../../interface/IBrands";
import api from "../api";

const createBrandService = async (brands: IBrands) => {
  return await api
    .post("/brands", brands)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default createBrandService;

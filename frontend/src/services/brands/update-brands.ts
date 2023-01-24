import { IBrands } from "../../interface/IBrands";
import api from "../api";

const updateBrandService = async (id: string, brands: IBrands) => {
  return await api
    .put(`/brands/${id}`, brands)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default updateBrandService;

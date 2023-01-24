import {TOnlyCar} from "../../interface/ICars";
import api from "../api";

const updateCarService = async (id: string, cars: TOnlyCar) => {
  return await api
    .put(`/cars/${id}`, cars)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default updateCarService;
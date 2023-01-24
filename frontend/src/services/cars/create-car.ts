import api from "../api";
import {TOnlyCar} from "../../interface/ICars";

const createCarService = async (cars: TOnlyCar) => {
  console.log(cars);
  return await api
    .post("/cars", cars)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default createCarService;

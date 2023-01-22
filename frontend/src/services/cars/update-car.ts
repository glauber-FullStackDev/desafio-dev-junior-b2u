import apiCars from "./api";
import { Types } from "mongoose";

export interface ICars {
  model: string;
  year: string;
  description: string;
  brandId: string;
  userId: string;
}

const updateCarService = async (id: Types.ObjectId, cars: ICars) => {
  return await apiCars
    .put(`/cars/${id}`, cars)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default updateCarService;

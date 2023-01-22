import apiCars from "./api";

export interface ICars {
  id: string;
  model: string;
  year: string;
  description: string;
  brandId: string;
  userId: string;
}

const updateCarService = async (id: string, cars: ICars) => {
  return await apiCars
    .put(`/cars/${id}`, cars)
    .then((response) => response.data)
    .catch(() => {
      error: true;
    });
};

export default updateCarService;

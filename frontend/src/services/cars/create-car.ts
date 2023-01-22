import apiCars from "./api";

export interface ICars {
  model: string;
  year: string;
  description: string;
}

const createUsersServices = async (cars: ICars) => {
    console.log(cars);
    return await apiCars
        .post('/cars', cars)
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};

export default createUsersServices;
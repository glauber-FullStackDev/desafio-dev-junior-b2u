import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export async function save(data: any) {
  try {
    const response = await api.post("createCar", data);
    return response.data;
  } catch (err) {
    throw console.log(err);
  }
}
export async function update(id_car: string, data: any) {
  try {
    const response = await api.put(`changeCar/${id_car}`, data);
    return true;
  } catch (err) {
    throw console.log(err);
  }
}

export async function deleteCar(id_car: string) {
  try {
    const response = await api.delete(`deleteCar/${id_car}`);
    return true;
  } catch (err) {
    throw console.log(err);
  }
}

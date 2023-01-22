import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333/",
});

/* export async function getData() {
  await api
    .get("fetchAll")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
 */
export async function save(data: any) {
  try {
    const response = await api.post("createCar", data);
    return response.data;
  } catch (err) {
    throw console.log(err);
  }
}
export async function update(data: any, id_car: string) {
  try {
    const response = await api.put(`changeCar/${id_car}`, data);
    return response.data;
  } catch (err) {
    throw console.log(err);
  }
}


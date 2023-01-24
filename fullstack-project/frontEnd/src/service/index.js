import axios from "axios";

const apiBitCars = axios.create({
  baseURL: "http://localhost:3333",
});

export default apiBitCars;

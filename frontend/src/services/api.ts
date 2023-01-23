import axios from "axios";
import { AxiosInstance } from "axios";

export const Api: AxiosInstance = axios.create({
  baseURL: "http://localhost:9901/cars",
});

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4001",
});

export default API;

import axios from "axios";

const datosAxios = axios.create({
  baseURL: "http://localhost:2000",
});

export default datosAxios;

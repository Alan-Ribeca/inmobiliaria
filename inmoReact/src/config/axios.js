import axios from "axios";

const datosAxios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default datosAxios;

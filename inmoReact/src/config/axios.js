import axios from "axios";

const usuarioAxios = axios.create({
  baseURL: "http://localhost:2000",
});

export default usuarioAxios;

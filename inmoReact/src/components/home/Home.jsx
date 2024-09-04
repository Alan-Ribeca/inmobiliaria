import { useState, useEffect } from "react";
import datosAxios from "../../config/axios";
import { Propiedad } from "../propiedades/Propiedad";
import './home.scss'

export const Home = () => {
  const [destacados, setDestacados] = useState([]);

  const consultarApi = async () => {
    try {
      const respuesta = await datosAxios.get("/propiedades");
      const primerosSeis = respuesta.data.slice(0, 6);
      setDestacados(primerosSeis);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <>
      <h1 className="titleDest">Propiedades destacadas</h1>

      <ul className="destac">
        {destacados.map((propiedad) => (
          <Propiedad key={propiedad._id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  );
};

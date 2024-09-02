import { useEffect, useState } from "react";
import datosAxios from "../../config/axios";
import { Propiedad } from "./Propiedad";

export const Propiedades = () => {
  const [propiedades, setPropiedades] = useState([]);

  const consultarApi = async () => {
    const propiedadesConsulta = await datosAxios.get("/propiedades");
    setPropiedades(propiedadesConsulta.data);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <>
      <h1>Propiedades</h1>
      <ul>
        {propiedades.map((propiedad) => (
          <Propiedad key={propiedad._id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  );
};

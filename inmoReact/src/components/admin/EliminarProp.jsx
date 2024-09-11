import { useState, useEffect } from "react";
import { Propiedad } from "../propiedades/Propiedad";
import datosAxios from "../../config/axios";
import "./eliminarProp.scss";
export const EliminarProp = () => {
  const [propiedades, setPropiedades] = useState([]);

  const consultarApi = async () => {
    const propiedadesConsulta = await datosAxios.get("/propiedades");
    setPropiedades(propiedadesConsulta.data);
  };

  useEffect(() => {
    consultarApi();
  }, []);
  return (
    <section className="containerCard">
      <h1 className="elimProp">Eliminar propiedad</h1>
      {propiedades.map((propiedad) => (
        <Propiedad key={propiedad._id} propiedad={propiedad} />
      ))}
    </section>
  );
};

import { useEffect, useState } from "react";
import datosAxios from "../../config/axios";
import { Propiedad } from "./Propiedad";
import "./propiedades.scss";
import { Filtro } from "./filtro/Filtro";

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
      <Filtro />
      <h1 className="titlePropiedades">Propiedades</h1>
      <p className="cantidadProp">{propiedades.length} Propiedades en total</p>
      <section className="containerCard">
        {propiedades.map((propiedad) => (
          <Propiedad key={propiedad._id} propiedad={propiedad} />
        ))}
      </section>
    </>
  );
};

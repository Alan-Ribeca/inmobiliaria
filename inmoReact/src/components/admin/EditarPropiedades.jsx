import { useState, useEffect } from "react";
import { Propiedad } from "../propiedades/Propiedad";
import datosAxios from "../../config/axios";

export const EditarPropiedades = () => {
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
      <h1 className="editProp">Editar propiedad</h1>
      {propiedades.map((propiedad) => (
        <Propiedad key={propiedad._id} propiedad={propiedad} />
      ))}
    </section>
  );
};

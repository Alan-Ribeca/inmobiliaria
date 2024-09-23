import { useState, useEffect } from "react";
import { Propiedad } from "../propiedades/Propiedad";
import datosAxios from "../../config/axios";
import './editarPropiedades.scss'

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
    <>
      <h1 className="editProp">Editar propiedad</h1>
      <section className="containerCard">
        {propiedades.map((propiedad) => (
          <Propiedad key={propiedad._id} propiedad={propiedad} />
        ))}
      </section>
    </>
  );
};

import { useEffect, useState } from "react";
import { Propiedad } from "./Propiedad";
import { Filtro } from "./filtro/Filtro";
import datosAxios from "../../config/axios";
import "./propiedades.scss";
import { Skeleton } from "../skeleton/Skeleton";

export const Propiedades = () => {
  const [isLoading, setIsloading] = useState(true);
  const [propiedades, setPropiedades] = useState([]);

  const consultarApi = async () => {
    const propiedadesConsulta = await datosAxios.get("/propiedades");
    setPropiedades(propiedadesConsulta.data);
    setIsloading(false);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <>
      <Filtro />
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className="titlePropiedades">Propiedades</h1>
          <p className="cantidadProp">
            {propiedades.length} Propiedades en total
          </p>
          <section className="containerCard">
            {propiedades.map((propiedad) => (
              <Propiedad key={propiedad._id} propiedad={propiedad} />
            ))}
          </section>
        </>
      )}
    </>
  );
};

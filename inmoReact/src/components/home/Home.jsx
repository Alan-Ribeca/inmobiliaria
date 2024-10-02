import { useState, useEffect } from "react";
import datosAxios from "../../config/axios";
import { Propiedad } from "../propiedades/Propiedad";
import "./home.scss";
import { Skeleton } from "../skeleton/Skeleton";

export const Home = () => {
  const [isLoading, setIsloading] = useState(true);
  const [destacados, setDestacados] = useState([]);

  const consultarApi = async () => {
    try {
      const respuesta = await datosAxios.get("/propiedades");
      const primerosSeis = respuesta.data.slice(0, 6);
      setDestacados(primerosSeis);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className="titleDest">Propiedades destacadas</h1>

          <ul className="destac">
            {destacados.map((propiedad) => (
              <Propiedad key={propiedad._id} propiedad={propiedad} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

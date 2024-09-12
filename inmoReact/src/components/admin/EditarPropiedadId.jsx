import { useLocation } from "react-router-dom";
import { Inputs } from "./Inputs";
export const EditarPropiedadId = () => {
  const location = useLocation();
  const { propiedad } = location.state;

  return (
    <>
      <h1>Editar Propiedad</h1>

      <section className="agregarPropiedad">
        <Inputs propiedad={propiedad} />
      </section>
    </>
  );
};

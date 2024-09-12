import { Inputs } from "./Inputs";
import "./subirPropiedad.scss";
export const SubirProductos = () => {
  return (
    <>
      <h1 className="titleAgregar">Agregar propiedades</h1>
      <p className="textoAgregar">
        Complete los campos con los datos correspondientes para agregar una
        nueva propiedad
      </p>

      <section className="agregarPropiedad">
        <Inputs />

        <button className="btnSubirPropiedad">Agregar propiedad</button>
      </section>
    </>
  );
};

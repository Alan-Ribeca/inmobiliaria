import "./filtro.scss";
import { useState } from "react";

export const Filtro = () => {
  const [abrir, setAbrir] = useState();
  const handleClick = (tipo) => {
    console.log(tipo);
    // setAbrir((prevAbrir) => (prevAbrir === "activo" ? null : "activo"));
    setAbrir((prevAbrir) => (prevAbrir === tipo ? null : tipo));
  };

  return (
    <>
      <section className="filtros">
        <input
          type="text"
          placeholder="¿Donde quieres vivir?"
          className="inputFiltro"
        />
        <div
          className={`divElegir ${abrir === "activo" ? "abierto" : ""}`}
          onClick={() => handleClick("activo")}
        >
          <button className="abrir propiedad">
            Tipo de propiedad{" "}
            <span className="flechaAbrir">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="svgFlechaBtn"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </span>{" "}
          </button>

          <div className="divOculto">
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Departamento
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Casa
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Apartamento
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Oficina
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Local Comercial
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Terreno
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Lote
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Casa en condominio
            </label>
          </div>
        </div>

        <div
          className={`divElegir ${
            abrir === "propiedadAbierto" ? "propiedadElegir" : ""
          }`}
          onClick={() => handleClick("propiedadAbierto")}
        >
          <button className="abrir">
            Alquiler{" "}
            <span className="flechaAbrir">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="svgFlechaBtn"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </span>{" "}
          </button>

          <div className="divOculto">
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Comprar
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Alquiler
            </label>
            <label className="seleccionado">
              <input type="checkbox" className="check" />
              Alquiler temporanio
            </label>
          </div>
        </div>

        <div
          className={`divElegir ${
            abrir === "precioAbrir" ? "precioElegir" : ""
          }`}
          onClick={() => handleClick("precioAbrir")}
        >
          <button className="abrir ">
            Precio{" "}
            <span className="flechaAbrir">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="svgFlechaBtn"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </span>{" "}
          </button>

          <div className="divOculto">
            <div className="containerPrecio">
              <p className="condicion">Desde</p>
              <p className="condicion">Hasta</p>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="$0"
                className="inputPrecio"
                onClick={(e) => e.stopPropagation()}
              />
              <input
                type="text"
                placeholder="$0"
                className="inputPrecio"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button className="aplicarFiltro">Aplicar Filtro</button>
          </div>
        </div>
      </section>
      <hr className="linea" />
    </>
  );
};

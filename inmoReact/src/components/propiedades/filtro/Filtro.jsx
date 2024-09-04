import "./filtro.scss";
export const Filtro = () => {
  return (
    <>
      <section className="filtros">
        <input
          type="text"
          placeholder="¿Donde quieres vivir?"
          className="inputFiltro"
        />
        <div className="divElegir">
          <button className="abrir">
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
              Piso
            </label>
            <label>
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
              Rancho
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
      </section>
      <hr className="linea" />
    </>
  );
};

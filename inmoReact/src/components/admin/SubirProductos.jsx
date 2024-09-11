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
        <div className="containerInputs">
          <input
            type="text"
            placeholder="Titulo de la propiedad"
            className="inputAgregar"
          />
          <input
            type="text"
            placeholder="Precio del alquiler"
            className="inputAgregar"
          />
          <input
            type="text"
            placeholder="Precio de las expensas"
            className="inputAgregar"
          />
          <input
            type="text"
            placeholder="Metro cuadrado de la propiedad"
            className="inputAgregar"
          />
          <input
            type="text"
            placeholder="Habitaciones"
            className="inputAgregar"
          />
          <input type="text" placeholder="Baños" className="inputAgregar" />
          <input type="text" placeholder="Cochera" className="inputAgregar" />
          <input type="text" placeholder="Ubicacion" className="inputAgregar" />
          <input
            type="text"
            placeholder="año de la propiedad"
            className="inputAgregar"
          />
          <input
            type="text"
            placeholder="Descripcion de la propiedad"
            className="inputAgregar"
          />
          <input type="file" placeholder="Subir img" className="inputImg" />
        </div>

        <button className="btnSubirPropiedad">Agregar propiedad</button>
      </section>
    </>
  );
};

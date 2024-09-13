/* eslint-disable no-unused-vars */
import { Inputs } from "./Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import datosAxios from "../../config/axios";
import "./subirPropiedad.scss";
export const SubirProductos = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    precioPropiedad: "",
    expensas: "",
    anoPropiedad: "",
    banos: "",
    coquera: "",
    descripcion: "",
    habitaciones: "",
    superficie: "",
    ubicacion: "",
  });

  const [archivoImg, setArchivoImg] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("Solo puedes subir hasta 5 imágenes");
      return;
    }
    setArchivoImg(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formularioData = new FormData();
    formularioData.append("titulo", formData.titulo);
    formularioData.append("precio[propiedad]", formData.precioPropiedad); // Cambiado para coincidir con el modelo
    formularioData.append("precio[expensas]", formData.expensas);
    formularioData.append("informacion[superficie]", formData.superficie);
    formularioData.append("informacion[habitaciones]", formData.habitaciones);
    formularioData.append("informacion[banos]", formData.banos);
    formularioData.append("informacion[coquera]", formData.cochera);
    formularioData.append("informacion[anoPropiedad]", formData.anoPropiedad);
    formularioData.append("informacion[descripcion]", formData.descripcion);
    formularioData.append("informacion[ubicacion]", formData.ubicacion);

    // Añadir imágenes
    if (Array.isArray(archivoImg)) {
      archivoImg.forEach((file) => {
        formularioData.append("imagenes", file);
      });
    } else {
      formularioData.append("imagenes", archivoImg);
    }

    try {
      const res = await datosAxios.post("/propiedades", formularioData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (error) {
      console.error(
        "Hubo un error al subir la propiedad:",
        error.response || error.message
      );
    }
  };

  return (
    <>
      <h1 className="titleAgregar">Agregar propiedades</h1>
      <p className="textoAgregar">
        Complete los campos con los datos correspondientes para agregar una
        nueva propiedad
      </p>

      <section className="agregarPropiedad">
        <form onSubmit={handleSubmit} className="form">
          <Inputs formData={formData} handleInputChange={handleInputChange} />
          <div>
            <label htmlFor="imagenes">Subir Imágenes (máx. 5)</label>
            <input
              type="file"
              id="imagenes"
              name="imagenes"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button className="btnSubirPropiedad" type="submit">
            Agregar Propiedad
          </button>
        </form>
      </section>
    </>
  );
};

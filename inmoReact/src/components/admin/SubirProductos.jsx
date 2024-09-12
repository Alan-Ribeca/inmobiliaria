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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Hacer la solicitud POST para crear la nueva propiedad
      const res = await datosAxios.post("/propiedades", formData);
      if (res.status === 201) {
        navigate("/productos"); // Redireccionar a la lista de productos
      }
    } catch (error) {
      console.error("Hubo un error al subir la propiedad:", error);
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
          <button className="btnSubirPropiedad" type="submit">
            Agregar Propiedad
          </button>
        </form>
      </section>
    </>
  );
};

import { useLocation, useNavigate } from "react-router-dom";
import { Inputs } from "./Inputs";
import { useState, useEffect } from "react";
import datosAxios from "../../config/axios";

export const EditarPropiedadId = () => {
  const location = useLocation();
  const { propiedad } = location.state;

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

  useEffect(() => {
    if (propiedad) {
      setFormData({
        titulo: propiedad.titulo || "",
        precioPropiedad: propiedad.precio?.propiedad || "",
        expensas: propiedad.precio?.expensas || "",
        anoPropiedad: propiedad.informacion?.anoPropiedad || "",
        banos: propiedad.informacion?.banos || "",
        coquera: propiedad.informacion?.coquera || "",
        descripcion: propiedad.informacion?.descripcion || "",
        habitaciones: propiedad.informacion?.habitaciones || "",
        superficie: propiedad.informacion?.superficie || "",
        ubicacion: propiedad.informacion?.ubicacion || "",
        _id: propiedad._id,
      });
    }
  }, [propiedad]);

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
      // Hacemos la solicitud PUT para actualizar la propiedad
      const res = await datosAxios.put(
        `/propiedades/${propiedad._id}`,
        formData
      );

      if (res.status === 200) {
        navigate("/editarProductos");
      }
    } catch (error) {
      console.error("Hubo un error al actualizar la propiedad:", error);
    }
  };

  return (
    <>
      <h1>Editar Propiedad</h1>

      <section className="agregarPropiedad">
        <form onSubmit={handleSubmit} className="form">
          <Inputs formData={formData} handleInputChange={handleInputChange} />
          <button className="btnSubirPropiedad" type="submit">
            Editar Propiedad
          </button>
        </form>
      </section>
    </>
  );
};

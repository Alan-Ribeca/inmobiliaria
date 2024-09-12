/* eslint-disable react/prop-types */
import "./inputs.scss";
import { useState, useEffect } from "react";
import datosAxios from "../../config/axios";
import { useNavigate } from "react-router-dom";

export const Inputs = ({ propiedad }) => {
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
    <form onSubmit={handleSubmit} className="form">
      <ul className="ulInputs">
        <li className="li">
          <label className="label">Titulo de la propiedad</label>
          <input
            type="text"
            className="input"
            name="titulo"
            placeholder="Ej. Casa con vista al mar"
            value={formData.titulo}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Precio del alquiler</label>
          <input
            type="text"
            className="input"
            name="precioPropiedad"
            placeholder="Ej. 150000"
            value={formData.precioPropiedad}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Precio de las expensas</label>
          <input
            type="text"
            className="input"
            name="expensas"
            placeholder="Ej. 10000"
            value={formData.expensas}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Metro cuadrado de la propiedad</label>
          <input
            type="text"
            className="input"
            name="superficie"
            placeholder="Ej. 95"
            value={formData.superficie}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Habitaciones</label>
          <input
            type="text"
            className="input"
            name="habitaciones"
            placeholder="Ej. 2"
            value={formData.habitaciones}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Baños</label>
          <input
            type="text"
            className="input"
            name="banos"
            placeholder="Ej. 1"
            value={formData.banos}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Cochera</label>
          <input
            type="text"
            className="input"
            name="coquera"
            placeholder="Ej. si"
            value={formData.coquera}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Ubicación</label>
          <input
            type="text"
            className="input"
            name="ubicacion"
            placeholder="Ej. Calle falsa 123, Rosario"
            value={formData.ubicacion}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Año de la propiedad</label>
          <input
            type="text"
            className="input"
            name="anoPropiedad"
            placeholder="Ej. 2024"
            value={formData.anoPropiedad}
            onChange={handleInputChange}
          />
        </li>
        <li className="li">
          <label className="label">Descripción de la propiedad</label>
          <input
            type="text"
            className="input"
            name="descripcion"
            placeholder="Descripción de la propiedad"
            value={formData.descripcion}
            onChange={handleInputChange}
          />
        </li>
      </ul>
      <button className="btnSubirPropiedad" type="submit">
        Editar Propiedad
      </button>
    </form>
  );
};
